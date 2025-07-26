import React, { useState, useEffect } from 'react';
import styles from './daily-verses.module.css';
import Headertwo from '../components/headertwo';
import Footer from '../components/footer';

function DailyVerses() {
  console.log('DailyVerses component is rendering'); // Debug log
  console.log('CSS styles:', styles); // Debug CSS import
  
  const [currentDate] = useState(new Date());
  const [dailyVerse, setDailyVerse] = useState({
    surah: 'Al-Baqarah',
    ayah: 255,
    arabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ',
    translation: 'Allah - there is no deity except Him, the Ever-Living, the Self-Sustaining. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is [presently] before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Kursi extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Great.',
    tafsir: 'This verse, known as Ayat al-Kursi (The Throne Verse), is one of the most powerful verses in the Quran. It describes Allah\'s absolute power, knowledge, and control over all creation. The verse emphasizes Allah\'s unique attributes: His eternal life, His self-subsistence, His comprehensive knowledge, and His absolute authority. It serves as a reminder of Allah\'s greatness and our complete dependence on Him.',
    benefits: [
      'Protection from evil and harm',
      'Strengthens faith and spirituality',
      'Brings peace and tranquility',
      'Increases blessings in daily life'
    ]
  });

  const [previousVerses] = useState([
    {
      date: '2024-01-14',
      surah: 'Al-Fatiha',
      ayah: 1,
      arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
      translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.',
      theme: 'Mercy and Compassion'
    },
    {
      date: '2024-01-13',
      surah: 'Al-Imran',
      ayah: 8,
      arabic: 'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِن لَّدُنكَ رَحْمَةً ۚ إِنَّكَ أَنتَ الْوَهَّابُ',
      translation: 'Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy. Indeed, You are the Bestower.',
      theme: 'Guidance and Steadfastness'
    },
    {
      date: '2024-01-12',
      surah: 'Al-Hashr',
      ayah: 22,
      arabic: 'هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ ۖ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ ۖ هُوَ الرَّحْمَٰنُ الرَّحِيمُ',
      translation: 'He is Allah, other than whom there is no deity, Knower of the unseen and the witnessed. He is the Entirely Merciful, the Especially Merciful.',
      theme: 'Divine Attributes'
    },
    {
      date: '2024-01-11',
      surah: 'Al-Ikhlas',
      ayah: 1,
      arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ',
      translation: 'Say, "He is Allah, [who is] One."',
      theme: 'Monotheism'
    },
    {
      date: '2024-01-10',
      surah: 'Al-Falaq',
      ayah: 1,
      arabic: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ',
      translation: 'Say, "I seek refuge in the Lord of daybreak."',
      theme: 'Seeking Protection'
    },
    {
      date: '2024-01-09',
      surah: 'An-Nas',
      ayah: 1,
      arabic: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ',
      translation: 'Say, "I seek refuge in the Lord of mankind."',
      theme: 'Human Protection'
    }
  ]);

  const [selectedTheme, setSelectedTheme] = useState('daily');
  const themes = [
    { id: 'daily', name: 'Daily Verses', icon: '🌟' },
    { id: 'morning', name: 'Morning Verses', icon: '🌅' },
    { id: 'evening', name: 'Evening Verses', icon: '🌆' },
    { id: 'protection', name: 'Protection Verses', icon: '🛡️' },
    { id: 'guidance', name: 'Guidance Verses', icon: '🧭' }
  ];

  return (
    <div className={styles.container} style={{minHeight: '100vh', backgroundColor: '#f0f0f0', padding: '20px'}}>
      <div style={{backgroundColor: 'white', padding: '20px', borderRadius: '10px', marginBottom: '20px'}}>
        <h1 style={{color: '#2C3E50', fontSize: '2rem', marginBottom: '10px'}}>Daily Verses - Test Page</h1>
        <p style={{color: '#6c757d', fontSize: '1.1rem'}}>This is a test to see if the component is rendering properly.</p>
        <p style={{color: '#28a745', fontSize: '1rem'}}>Current Date: {currentDate.toLocaleDateString()}</p>
      </div>
      
      <Headertwo />
      
      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroHeader}>
              <h1>Daily Verses</h1>
              <h2>آيات يومية</h2>
              <p>Discover the wisdom of Allah through daily verses from the Holy Quran</p>
            </div>
            
            <div className={styles.dateDisplay}>
              <div className={styles.dateCard}>
                <span className={styles.dateIcon}>📅</span>
                <span className={styles.dateText}>
                  {currentDate.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
            </div>

            <div className={styles.themeSelector}>
              <h3>Choose Your Theme</h3>
              <div className={styles.themeButtons}>
                {themes.map((theme) => (
                  <button
                    key={theme.id}
                    className={`${styles.themeButton} ${selectedTheme === theme.id ? styles.active : ''}`}
                    onClick={() => setSelectedTheme(theme.id)}
                  >
                    <span className={styles.themeIcon}>{theme.icon}</span>
                    <span className={styles.themeName}>{theme.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={styles.verseSection}>
          <div className={styles.verseCard}>
            <div className={styles.verseHeader}>
              <div className={styles.verseBadge}>
                <span className={styles.badgeIcon}>📖</span>
                <span className={styles.badgeText}>Today's Verse</span>
              </div>
              <div className={styles.verseInfo}>
                <span className={styles.surahName}>{dailyVerse.surah}</span>
                <span className={styles.ayahNumber}>Ayah {dailyVerse.ayah}</span>
              </div>
            </div>
            
            <div className={styles.arabicText}>
              {dailyVerse.arabic}
            </div>
            
            <div className={styles.translation}>
              <h4>Translation</h4>
              <p>{dailyVerse.translation}</p>
            </div>
            
            <div className={styles.tafsir}>
              <h4>Tafsir (Interpretation)</h4>
              <p>{dailyVerse.tafsir}</p>
            </div>

            <div className={styles.benefits}>
              <h4>Benefits of Reciting This Verse</h4>
              <ul className={styles.benefitsList}>
                {dailyVerse.benefits.map((benefit, index) => (
                  <li key={index} className={styles.benefitItem}>
                    <span className={styles.benefitIcon}>✨</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.previousVerses}>
          <div className={styles.sectionHeader}>
            <h3>Previous Verses</h3>
            <p>Explore verses from previous days</p>
          </div>
          <div className={styles.versesGrid}>
            {previousVerses.map((verse, index) => (
              <div key={index} className={styles.verseItem}>
                <div className={styles.verseDate}>
                  <span className={styles.dateIcon}>📅</span>
                  <span>{verse.date}</span>
                </div>
                <div className={styles.verseInfo}>
                  <span className={styles.surahName}>{verse.surah}</span>
                  <span className={styles.ayahNumber}>Ayah {verse.ayah}</span>
                </div>
                <div className={styles.verseTheme}>
                  <span className={styles.themeLabel}>Theme:</span>
                  <span className={styles.themeValue}>{verse.theme}</span>
                </div>
                <div className={styles.arabicText}>
                  {verse.arabic}
                </div>
                <div className={styles.translation}>
                  <p>{verse.translation}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default DailyVerses; 