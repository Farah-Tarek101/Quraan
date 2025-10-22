import { useEffect, useState } from "react";
import styles from "./QuranSec.module.css";
import { useAuth } from "../../context/AuthContext";
import authService from "../../services/authService";

const QuranContainer = () => {
  const [surahs, setSurahs] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [loadingSurah, setLoadingSurah] = useState(false);
  const [markedAyahs, setMarkedAyahs] = useState([]);
  const { user } = useAuth();

  // ✅ Load only surah names and metadata
  useEffect(() => {
    const fetchSurahList = async () => {
      try {
        const res = await fetch("https://api.alquran.cloud/v1/surah");
        const data = await res.json();
        setSurahs(data.data || []);
      } catch (err) {
        console.error("❌ Error fetching surah list:", err);
      }

      // Fetch marked ayahs (if logged in)
      if (user && user.token) {
        try {
          const marked = await authService.getMarkedAyahs(user.token);
          setMarkedAyahs(marked);
        } catch (err) {
          console.error("❌ Failed to fetch marked ayahs:", err);
        }
      }
    };

    fetchSurahList();
  }, [user]);

  // ✅ Fetch a specific surah when clicked
  const handleSurahClick = async (surahNumber) => {
    setLoadingSurah(true);
    setSelectedSurah(null); // Clear previous one

    try {
      const res = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/ar.alafasy`);
      const data = await res.json();
      setSelectedSurah(data.data);
    } catch (err) {
      console.error("❌ Error loading surah:", err);
      alert("فشل تحميل السورة. حاول مرة أخرى.");
    }

    setLoadingSurah(false);
  };

  // ✅ Handle marking ayahs
  const handleMarkAyah = async (surahNumber, ayahNumber) => {
    if (!user || !user.token) {
      alert("Please log in to mark Ayahs.");
      return;
    }
    try {
      const response = await authService.markAyah(surahNumber, ayahNumber, user.token);
      setMarkedAyahs(response.markedAyahs);
    } catch (error) {
      console.error("❌ Failed to mark Ayah:", error);
      alert("Failed to mark Ayah.");
    }
  };

  const isAyahMarked = (surahNumber, ayahNumber) => {
    return markedAyahs.some(
      (ayah) => ayah.surahNumber === surahNumber && ayah.ayahNumber === ayahNumber
    );
  };

  return (
    <div id="quran" className={styles.container}>
      <h2 className={styles.title}>القرآن الكريم</h2>

      {/* 🕌 Surah List */}
      <div className={styles.cards}>
        {surahs.length === 0 ? (
          <p>جارٍ تحميل قائمة السور...</p>
        ) : (
          surahs.map((surah) => (
            <div
              key={surah.number}
              className={styles.card}
              onClick={() => handleSurahClick(surah.number)}
            >
              <div className={styles.cardHeader}>
                <span className={styles.number}>{surah.number}</span>
                <h3 className={styles.englishName}>{surah.englishName}</h3>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.arabicName}>{surah.name}</p>
                <p className={styles.revelation}>
                  {surah.revelationType === "Meccan" ? "مكية" : "مدنية"}
                </p>
                <p className={styles.ayahCount}>
                  عدد الآيات: {surah.numberOfAyahs}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* 📜 Modal for Selected Surah */}
      {(selectedSurah || loadingSurah) && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            {loadingSurah ? (
              <p className={styles.loadingText}>جاري تحميل السورة...</p>
            ) : (
              <>
                <button
                  className={styles.closeBtn}
                  onClick={() => setSelectedSurah(null)}
                >
                  ✕
                </button>

                <h3 className={styles.modalTitle}>{selectedSurah.name}</h3>

                <div className={styles.ayahDisplay}>
                  {selectedSurah.ayahs.map((ayah) => (
                    <p
                      key={ayah.number}
                      className={`${styles.quranText} ${
                        isAyahMarked(selectedSurah.number, ayah.numberInSurah)
                          ? styles.markedAyah
                          : ""
                      }`}
                      onClick={() =>
                        handleMarkAyah(selectedSurah.number, ayah.numberInSurah)
                      }
                    >
                      {ayah.text}
                      <span className={styles.ayahNum}>
                        ﴿{ayah.numberInSurah}﴾
                      </span>
                      {isAyahMarked(selectedSurah.number, ayah.numberInSurah) && (
                        <span className={styles.markedIcon}>✔️</span>
                      )}
                    </p>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuranContainer;
