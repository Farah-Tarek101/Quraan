import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useEffect, useState } from 'react';
import style from './AzkarPage.module.css';

const AzkarPage = () => {
  const [azkar, setAzkar] = useState([]);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/nawafalqari/ayah/main/src/data/adkar.json')
      .then(res => res.json())
      .then(data => {
        const formatted = Object.entries(data).map(([key, value]) => ({
          category: key,
          items: value,
        }));
        setAzkar(formatted);
      })
      .catch(err => {
        console.error("❌ Error fetching Azkar:", err);
        setError("Failed to load Azkar. Please check your internet connection or try again later.");
      });
  }, []);

  return (
    <>
      <Navbar />

      <div className={style.azkarSection}>
        <h2 className={style.title}>الأذكار</h2>

        {error && <p className={style.error}>{error}</p>}

        {selectedCategory && (
          <button className={style.backButton} onClick={() => setSelectedCategory(null)}>
            ⬅ العودة إلى الأذكار
          </button>
        )}

        <div className={style.cardGrid}>
          {!selectedCategory
            ? azkar.map((section, index) => (
                <div
                  key={index}
                  className={style.card}
                  onClick={() => setSelectedCategory(section.category)}
                >
                  <h3>{section.category}</h3>
                  <span>عدد الأذكار: {section.items.length}</span>
                </div>
              ))
            : azkar
                .filter(section => section.category === selectedCategory)
                .flatMap(section =>
                  section.items.map((item, idx) => (
                    <div key={idx} className={style.card}>
                      <p>{item.content}</p>
                      {item.count && <span>عدد المرات: {item.count}</span>}
                    </div>
                  ))
                )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AzkarPage;
