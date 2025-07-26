import React, { useState, useEffect } from 'react';
import styles from './prayers.module.css';
import Headertwo from '../components/headertwo';
import Footer from '../components/footer';

function Prayers() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [prayerTimes, setPrayerTimes] = useState({
    fajr: '05:30',
    dhuhr: '12:30',
    asr: '15:45',
    maghrib: '18:20',
    isha: '19:45'
  });

  const [nextPrayer, setNextPrayer] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const prayers = [
    {
      name: 'Fajr',
      arabic: 'الفجر',
      time: prayerTimes.fajr,
      rakat: '2 Sunnah + 2 Fard',
      description: 'The dawn prayer, performed before sunrise'
    },
    {
      name: 'Dhuhr',
      arabic: 'الظهر',
      time: prayerTimes.dhuhr,
      rakat: '4 Sunnah + 4 Fard + 2 Sunnah',
      description: 'The noon prayer, performed when the sun passes its zenith'
    },
    {
      name: 'Asr',
      arabic: 'العصر',
      time: prayerTimes.asr,
      rakat: '4 Sunnah + 4 Fard',
      description: 'The afternoon prayer, performed in the late afternoon'
    },
    {
      name: 'Maghrib',
      arabic: 'المغرب',
      time: prayerTimes.maghrib,
      rakat: '2 Fard + 2 Sunnah',
      description: 'The sunset prayer, performed just after sunset'
    },
    {
      name: 'Isha',
      arabic: 'العشاء',
      time: prayerTimes.isha,
      rakat: '4 Sunnah + 4 Fard + 2 Sunnah + 3 Witr',
      description: 'The night prayer, performed after the twilight has disappeared'
    }
  ];

  const duas = [
    {
      name: 'Dua for Entering Mosque',
      arabic: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
      english: 'O Allah, open the gates of Your mercy for me',
      transliteration: 'Allahumma aftah lee abwaaba rahmatik'
    },
    {
      name: 'Dua for Leaving Mosque',
      arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ وَرَحْمَتِكَ',
      english: 'O Allah, I ask You of Your bounty and Your mercy',
      transliteration: 'Allahumma innee as\'aluka min fadlik wa rahmatik'
    },
    {
      name: 'Dua Before Eating',
      arabic: 'بِسْمِ اللَّهِ وَعَلَى بَرَكَةِ اللَّهِ',
      english: 'In the name of Allah and with the blessings of Allah',
      transliteration: 'Bismillahi wa \'ala barakatillah'
    },
    {
      name: 'Dua After Eating',
      arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ',
      english: 'Praise be to Allah who fed me this and provided it for me without any effort or power on my part',
      transliteration: 'Alhamdulillahil-lathee at\'amani haatha wa razaqaneehi min ghayri hawlin minnee wa laa quwwah'
    }
  ];

  return (
    <div className={styles.container}>
      <Headertwo />
      
      <main className={styles.mainContent}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1>Islamic Prayers</h1>
            <h2>الصلوات الإسلامية</h2>
            <p>Learn about the five daily prayers and their importance in Islam</p>
            <div className={styles.currentTime}>
              {currentTime.toLocaleTimeString()}
            </div>
          </div>
        </section>

        <section className={styles.prayerTimesSection}>
          <h3>Prayer Times</h3>
          <div className={styles.prayerGrid}>
            {prayers.map((prayer, index) => (
              <div key={index} className={styles.prayerCard}>
                <div className={styles.prayerHeader}>
                  <h4>{prayer.name}</h4>
                  <div className={styles.prayerArabic}>{prayer.arabic}</div>
                </div>
                <div className={styles.prayerTime}>{prayer.time}</div>
                <div className={styles.prayerRakat}>{prayer.rakat}</div>
                <div className={styles.prayerDescription}>{prayer.description}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.prayerInstructions}>
          <h3>How to Perform Prayer</h3>
          <div className={styles.instructionsGrid}>
            <div className={styles.instructionCard}>
              <div className={styles.stepNumber}>1</div>
              <h4>Make Wudu (Ablution)</h4>
              <p>Perform ritual washing before prayer to purify yourself</p>
            </div>
            <div className={styles.instructionCard}>
              <div className={styles.stepNumber}>2</div>
              <h4>Face the Qibla</h4>
              <p>Turn towards the Kaaba in Mecca, the direction of prayer</p>
            </div>
            <div className={styles.instructionCard}>
              <div className={styles.stepNumber}>3</div>
              <h4>Make Niyyah (Intention)</h4>
              <p>Silently make the intention to perform the specific prayer</p>
            </div>
            <div className={styles.instructionCard}>
              <div className={styles.stepNumber}>4</div>
              <h4>Takbir</h4>
              <p>Raise your hands and say "Allahu Akbar" (Allah is Greatest)</p>
            </div>
            <div className={styles.instructionCard}>
              <div className={styles.stepNumber}>5</div>
              <h4>Recite Surah Al-Fatiha</h4>
              <p>Recite the opening chapter of the Quran in each rakat</p>
            </div>
            <div className={styles.instructionCard}>
              <div className={styles.stepNumber}>6</div>
              <h4>Complete the Rakat</h4>
              <p>Perform the required number of rakat for each prayer</p>
            </div>
          </div>
        </section>

        <section className={styles.duasSection}>
          <h3>Daily Duas</h3>
          <div className={styles.duasGrid}>
            {duas.map((dua, index) => (
              <div key={index} className={styles.duaCard}>
                <h4>{dua.name}</h4>
                <div className={styles.arabicText}>
                  {dua.arabic}
                </div>
                <div className={styles.englishText}>
                  <p>{dua.english}</p>
                </div>
                <div className={styles.transliteration}>
                  <p>{dua.transliteration}</p>
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

export default Prayers; 