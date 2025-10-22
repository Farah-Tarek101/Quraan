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

  // ✅ Fetch categories
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
        setSelectedCategory(data[0]?.id || null);
        setError(null);
      } catch (err) {
        console.error("❌ Error fetching categories:", err);
        setError("Failed to fetch categories");
      }
    };
    fetchCategories();
  }, [language]);

  // ✅ Fetch hadith list
  useEffect(() => {
    if (!selectedCategory) return;

    const fetchHadiths = async () => {
      setLoading(true);
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 12000); // 12s timeout

      try {
        const res = await fetch(
          `${API_BASE}/hadith/list?language=${language}&category_id=${selectedCategory}&page=${page}`,
          { signal: controller.signal }
        );

        const data = await res.json();
        setHadiths(data.data || []);
        setError(null);
      } catch (err) {
        console.error("❌ Error fetching hadiths:", err);
        if (err.name === "AbortError") {
          setError("Request timed out. Please try again.");
        } else {
          setError("Failed to fetch hadiths");
        }
      } finally {
        clearTimeout(timeout);
        setLoading(false);
      }
    };
    fetchHadiths();
  }, [selectedCategory, language, page]);

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

      {/* 🕌 Category Section */}
      <div className={style.categoryList}>
        {error ? (
          <p className={style.error}>{error}</p>
        ) : Array.isArray(categories) && categories.length > 0 ? (
          categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setPage(1);
              }}
              className={
                selectedCategory === cat.id ? style.activeCategory : ""
              }
            >
              {cat.title}
            </button>
          ))
        ) : (
          <p>No categories found.</p>
        )}
      </div>

      {/* 📜 Hadith Section */}
      <div className={style.hadithGrid}>
        {loading ? (
          <div className={style.loader}>
            <div className={style.spinner}></div>
          </div>
        ) : error ? (
          <p className={style.error}>{error}</p>
        ) : hadiths.length === 0 ? (
          <p>No Hadith found.</p>
        ) : (
          hadiths.map((h) => (
            <div key={h.id} className={style.hadithCard}>
              <h3>{h.title}</h3>
              <button
                onClick={() =>
                  window.open(
                    `https://hadeethenc.com/en/browse/hadith/${h.id}`,
                    "_blank"
                  )
                }
                className={style.viewButton}
              >
                View
              </button>
            </div>
          ))
        )}
      </div>

      {/* 🔁 Pagination */}
      <div className={style.pagination}>
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          Prev
        </button>
        <span>Page {page}</span>
        <button onClick={() => setPage((p) => p + 1)}>Next</button>
      </div>

      <Footer />
    </div>
  );
};

export default HadithPage;
