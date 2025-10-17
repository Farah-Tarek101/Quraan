import React, { useState } from 'react';
import styles from './TasbihPage.module.css';

const TasbihPage = () => {
  const initialTasbihPhrases = [
    { id: 1, arabic: "سبحان الله", english: "Subhanallah (Glory be to Allah)", count: 0 },
    { id: 2, arabic: "الحمد لله", english: "Alhamdulillah (Praise be to Allah)", count: 0 },
    { id: 3, arabic: "لا إله إلا الله", english: "La ilaha illallah (There is no god but Allah)", count: 0 },
    { id: 4, arabic: "الله أكبر", english: "Allahu Akbar (Allah is the Greatest)", count: 0 },
    { id: 5, arabic: "سبحان الله وبحمده", english: "Subhanallahi wa bihamdihi (Glory and praise be to Allah)", count: 0 },
    { id: 6, arabic: "سبحان الله العظيم", english: "Subhanallahil Azim (Glory be to Allah, the Almighty)", count: 0 },
    { id: 7, arabic: "لا حول ولا قوة إلا بالله", english: "La hawla wa la quwwata illa billah (There is no power nor strength except with Allah)", count: 0 },
    { id: 8, arabic: "أستغفر الله", english: "Astaghfirullah (I seek forgiveness from Allah)", count: 0 },
    { id: 9, arabic: "اللهم صل وسلم على نبينا محمد", english: "Allahumma salli wa sallim 'ala nabiyyina Muhammad (O Allah, send blessings and peace upon our Prophet Muhammad)", count: 0 },
  ];

  const [phrases, setPhrases] = useState(initialTasbihPhrases);

  const handleTasbihClick = (id) => {
    setPhrases(prevPhrases =>
      prevPhrases.map(phrase =>
        phrase.id === id ? { ...phrase, count: phrase.count + 1 } : phrase
      )
    );
  };

  const handleResetClick = (id) => {
    setPhrases(prevPhrases =>
      prevPhrases.map(phrase =>
        phrase.id === id ? { ...phrase, count: 0 } : phrase
      )
    );
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>تسبيح</h2>
      <p className={styles.subtitle}>ما يقال للتسبيح</p>
      <div className={styles.tasbihList}>
        {phrases.map((phrase) => (
          <div key={`${phrase.id}-${phrase.count}`} className={styles.tasbihItem}>
            <p className={styles.arabicText}>{phrase.arabic}</p>
            <p className={styles.englishText}>{phrase.english}</p>
            <div className={styles.counterSection}>
              <button className={styles.countButton} onClick={() => handleTasbihClick(phrase.id)}>Count</button>
              <span className={styles.counter}>{phrase.count}</span>
              <button className={styles.resetButton} onClick={(e) => {
                e.stopPropagation(); // Prevent parent's onClick from firing
                handleResetClick(phrase.id);
              }}>Reset</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasbihPage;
