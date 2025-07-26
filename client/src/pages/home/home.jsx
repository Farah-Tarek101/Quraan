import React, { useState, useEffect } from 'react';
import styles from './home.module.css'; 
import Headertwo from '../../components/headertwo';
import Footer from '../../components/footer';

function HomeContent() {
  const surahNames = [
    { name: 'Al-Fatiha', arabic: 'الفاتحة', link: '/surah/1', number: 1 },
    { name: 'Al-Baqarah', arabic: 'البقرة', link: '/surah/2', number: 2 },
    { name: 'Aal-Imran', arabic: 'آل عمران', link: '/surah/3', number: 3 },
    { name: 'An-Nisa', arabic: 'النساء', link: '/surah/4', number: 4 },
    { name: 'Al-Ma\'idah', arabic: 'المائدة', link: '/surah/5', number: 5 },
    { name: 'Al-An\'am', arabic: 'الأنعام', link: '/surah/6', number: 6 },
    { name: 'Al-A\'raf', arabic: 'الأعراف', link: '/surah/7', number: 7 },
    { name: 'Al-Anfal', arabic: 'الأنفال', link: '/surah/8', number: 8 },
    { name: 'At-Tawbah', arabic: 'التوبة', link: '/surah/9', number: 9 },
  ];

  const islamicCategories = [
    { name: 'Daily Verses', arabic: 'آيات يومية', link: '/daily-verses', icon: '📖' },
    { name: 'Hadith Collection', arabic: 'مجموعة الأحاديث', link: '/hadith', icon: '📚' },
    { name: 'Islamic Prayers', arabic: 'الصلوات الإسلامية', link: '/prayers', icon: '🤲' },
    { name: 'Quran Tafsir', arabic: 'تفسير القرآن', link: '/tafsir', icon: '🔍' },
    { name: 'Islamic Calendar', arabic: 'التقويم الإسلامي', link: '/calendar', icon: '📅' },
    { name: 'Qibla Direction', arabic: 'اتجاه القبلة', link: '/qibla', icon: '🕌' },
  ];

  const headerImages = [
    { title: "Holy Quran", color: "#2C3E50" },
    { title: "Islamic Wisdom", color: "#34495E" },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % headerImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [headerImages.length]);

  return (
    <div className={styles.container}>
      <Headertwo />
      <section className={styles.homefirstSection}>
        <div 
          className={styles.homeHeaderImage}
          style={{
            backgroundColor: headerImages[currentImage].color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '2rem',
            fontWeight: 'bold'
          }}
        >
          {headerImages[currentImage].title}
        </div>
        <div className={styles.homefirstText}>
          <h1>القرآن الكريم</h1>
          <h2>THE HOLY QURAN</h2>
          <p>Discover the divine wisdom and guidance of the Holy Quran. Read, listen, and reflect on the words of Allah.</p>
        </div>
        <div className={styles.dots}>
          {headerImages.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${currentImage === index ? styles.active : ''}`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </section>
      
      <h4>Your spiritual journey begins here</h4>

      <main className={styles.mainContent}>
        <section className={`${styles.hotelSearch} ${styles.tripsPadding}`}>
          <h5>Popular Surahs</h5>
          <div className={styles.gridContainer}>
            {surahNames.map((surah, index) => (
              <div key={index} className={styles.gridItem}>
                <div className={styles.imageContainer}>
                  <div className={styles.surahNumber}>{surah.number}</div>
                  <div 
                    className={styles.surahPlaceholder}
                    style={{
                      backgroundColor: '#4A90E2',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      padding: '20px',
                      height: '100%'
                    }}
                  >
                    {surah.name}
                  </div>
                </div>
                <div className={styles.imageName}>
                  <a href={surah.link} className={styles.imageLink}>
                    <div className={styles.surahName}>{surah.name}</div>
                    <div className={styles.surahArabic}>{surah.arabic}</div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={`${styles.hotelSearch} ${styles.souvenirsPadding}`}>
          <h5>Islamic Resources</h5>
          <div className={styles.gridContainer}>
            {islamicCategories.map((category, index) => (
              <div key={index} className={styles.gridItem}>
                <div className={styles.imageContainer}>
                  <div className={styles.categoryIcon}>{category.icon}</div>
                  <div 
                    className={styles.categoryPlaceholder}
                    style={{
                      backgroundColor: '#50C878',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      padding: '20px',
                      height: '100%'
                    }}
                  >
                    {category.name}
                  </div>
                </div>
                <div className={styles.imageName}>
                  <a href={category.link} className={styles.imageLink}>
                    <div className={styles.categoryName}>{category.name}</div>
                    <div className={styles.categoryArabic}>{category.arabic}</div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      <Footer className={styles.footer} />
    </div>
  );
}

export default HomeContent;
