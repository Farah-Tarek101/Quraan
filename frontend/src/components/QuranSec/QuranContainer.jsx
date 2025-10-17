import { useEffect, useState } from "react";
import styles from "./QuranSec.module.css";
import { useAuth } from '../../context/AuthContext'; // Import useAuth
import authService from '../../services/authService'; // Import authService

const QuranContainer = () => {
  const [surahs, setSurahs] = useState([]);
  const [selectedSurah, setSelectedSurah] = useState(null);
  const [audio, setAudio] = useState(null);
  const [markedAyahs, setMarkedAyahs] = useState([]); // New state for marked Ayahs
  const { user } = useAuth(); // Get user from AuthContext

  // Fetch surahs and marked Ayahs
  useEffect(() => {
    const fetchSurahsAndMarkedAyahs = async () => {
      try {
        const surahResponse = await fetch("https://api.alquran.cloud/v1/quran/ar.alafasy");
        const surahData = await surahResponse.json();
        setSurahs(surahData.data.surahs);

        if (user && user.token) {
          const markedAyahsData = await authService.getMarkedAyahs(user.token);
          setMarkedAyahs(markedAyahsData);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchSurahsAndMarkedAyahs();
  }, [user]); // Re-run when user changes

  const handleSurahClick = (surah) => {
    setSelectedSurah(surah);
  };

  const handleAyahPlay = (audioUrl) => {
    setAudio(audioUrl);
  };

  const handleMarkAyah = async (surahNumber, ayahNumber) => {
    if (!user || !user.token) {
      alert('Please log in to mark Ayahs.');
      return;
    }
    try {
      const response = await authService.markAyah(surahNumber, ayahNumber, user.token);
      setMarkedAyahs(response.markedAyahs); // Update local state with new marked Ayahs
    } catch (error) {
      console.error('Failed to mark Ayah:', error);
      alert('Failed to mark Ayah.');
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

      {/* 🕌 Surah Cards Grid */}
      <div className={styles.cards}>
        {surahs.map((surah) => (
          <div
            key={surah.number}
            className={styles.card}
            onClick={() => handleSurahClick(surah)}
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
                عدد الآيات: {surah.ayahs.length}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 📜 Modal for Selected Surah */}
      {selectedSurah && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button
              className={styles.closeBtn}
              onClick={() => setSelectedSurah(null)}
            >
              ✕
            </button>

            <h3 className={styles.modalTitle}>{selectedSurah.name}</h3>

            {/* Quranic Arabic Text Styled Like the Image */}
            <div className={styles.ayahDisplay}>
              {selectedSurah.ayahs.map((ayah) => (
                <p
                  key={ayah.number}
                  className={`${styles.quranText} ${isAyahMarked(selectedSurah.number, ayah.numberInSurah) ? styles.markedAyah : ''}`}
                  onClick={() => handleMarkAyah(selectedSurah.number, ayah.numberInSurah)}
                >
                  {ayah.text}
                  <span className={styles.ayahNum}>﴿{ayah.numberInSurah}﴾</span>
                  {isAyahMarked(selectedSurah.number, ayah.numberInSurah) && (
                    <span className={styles.markedIcon}>✔️</span>
                  )}
                </p>
              ))}
            </div>
          </div>

          {audio && (
            <audio
              src={audio}
              autoPlay
              controls
              className={styles.audioPlayer}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default QuranContainer;
