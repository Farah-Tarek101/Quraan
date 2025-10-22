import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import style from "./HadithPage.module.css";

const HadithPage = () => {
  const [language, setLanguage] = useState("en");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hadiths, setHadiths] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_BASE = import.meta.env.VITE_API_BASE_URL;

  // ✅ Fetch categories only once
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(`${API_BASE}/hadith/categories?language=${language}`);
        const data = await res.json();

        if (!Array.isArray(data)) {
          setError("Invalid data format from API");
          setCategories([]);
          return;
        }

        setCategories(data);
        setError(null);
      } catch (err) {
        console.error("❌ Error fetching categories:", err);
        setError("Failed to fetch categories");
      }
    };

    fetchCategories();
  }, [language]);

  // ✅ Fetch hadiths when category is clicked
  const handleCategoryClick = async (categoryId) => {
    setSelectedCategory(categoryId);
    setHadiths([]); // Clear old hadiths
    setLoading(true);
    setError(null);
    setPage(1);

    try {
      const res = await fetch(
        `${API_BASE}/hadith/list?language=${language}&category_id=${categoryId}&page=1`
      );
      const data = await res.json();

      if (data && data.data) {
        setHadiths(data.data);
      } else {
        setHadiths([]);
      }
    } catch (err) {
      console.error("❌ Error fetching hadiths:", err);
      setError("Failed to fetch hadiths");
    }

    setLoading(false);
  };

  // ✅ Handle pagination
  const handlePageChange = async (newPage) => {
    if (!selectedCategory) return;
    setPage(newPage);
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `${API_BASE}/hadith/list?language=${language}&category_id=${selectedCategory}&page=${newPage}`
      );
      const data = await res.json();
      setHadiths(data.data || []);
    } catch (err) {
      console.error("❌ Error fetching hadiths:", err);
      setError("Failed to fetch hadiths");
    }

    setLoading(false);
  };

  return (
    <div className={style.hadithSection}>
      <Navbar />

      {/* 🌐 Language Switch */}
      <div className={style.languageSwitch}>
        <button
          onClick={() => setLanguage("en")}
          className={language === "en" ? style.active : ""}
        >
          English
        </button>
        <button
          onClick={() => setLanguage("ar")}
          className={language === "ar" ? style.active : ""}
        >
          العربية
        </button>
      </div>

      {/* 📚 Category Section */}
      <div className={style.categoryList}>
        {error ? (
          <p className={style.error}>{error}</p>
        ) : categories.length === 0 ? (
          <p>جارٍ تحميل الأقسام...</p>
        ) : (
          categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={
                selectedCategory === cat.id ? style.activeCategory : ""
              }
            >
              {cat.title}
            </button>
          ))
        )}
      </div>

      {/* 📜 Hadith Section */}
      <div className={style.hadithGrid}>
        {loading ? (
          <p>جارٍ تحميل الأحاديث...</p>
        ) : hadiths.length === 0 && selectedCategory ? (
          <p>لا توجد أحاديث في هذا القسم.</p>
        ) : (
          hadiths.map((h) => (
            <div key={h.id} className={style.hadithCard}>
              <h3>{h.title}</h3>
              <button
                onClick={() =>
                  window.open(
                    `https://hadeethenc.com/${language}/browse/hadith/${h.id}`,
                    "_blank"
                  )
                }
                className={style.viewButton}
              >
                عرض الحديث
              </button>
            </div>
          ))
        )}
      </div>

      {/* 🔁 Pagination */}
      {selectedCategory && hadiths.length > 0 && (
        <div className={style.pagination}>
          <button
            onClick={() => handlePageChange(Math.max(page - 1, 1))}
            disabled={page === 1 || loading}
          >
            السابق
          </button>
          <span>الصفحة {page}</span>
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={loading}
          >
            التالي
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default HadithPage;
