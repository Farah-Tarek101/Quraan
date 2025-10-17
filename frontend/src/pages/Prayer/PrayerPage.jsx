import { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import styles from './PrayerPage.module.css';

import fajr from '../../assets/images/fajr.png';
import dhuhr from '../../assets/images/dhuhr.png';
import asr from '../../assets/images/asr.png';
import maghrib from '../../assets/images/maghrib.png';
import isha from '../../assets/images/isha.png';

const prayerList = [
  { name: 'الفجر', image: fajr, key: 'Fajr' },
  { name: 'الظهر', image: dhuhr, key: 'Dhuhr' },
  { name: 'العصر', image: asr, key: 'Asr' },
  { name: 'المغرب', image: maghrib, key: 'Maghrib' },
  { name: 'العشاء', image: isha, key: 'Isha' },
];

const PrayerPage = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [prayerTimes, setPrayerTimes] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLatitude(pos.coords.latitude);
          setLongitude(pos.coords.longitude);
        },
        () => {
          setError('يرجى تفعيل الموقع الجغرافي');
          setLoading(false);
        }
      );
    } else {
      setError('المتصفح لا يدعم تحديد الموقع الجغرافي');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (latitude && longitude) {
      const date = new Date().toISOString().split('T')[0].split('-').reverse().join('-');
      fetch(`https://api.aladhan.com/v1/timings/${date}?latitude=${latitude}&longitude=${longitude}&method=5`)
        .then((res) => res.json())
        .then((data) => {
          setPrayerTimes(data.data.timings);
          setLoading(false);
        })
        .catch(() => {
          setError('فشل تحميل مواعيد الصلاة');
          setLoading(false);
        });
    }
  }, [latitude, longitude]);

  return (
    <>
      <Navbar />
      <main className={styles.container}>
        <h2 className={styles.title}>مواقيت الصلاة</h2>

        {loading && <p className={styles.loading}>جاري تحميل مواعيد الصلاة...</p>}
        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.cardGrid}>
          {prayerList.map((prayer) => (
            <div key={prayer.key} className={styles.card}>
              <div className={styles.cardHeader}>
                <img src={prayer.image} alt={prayer.name} className={styles.img} />
                <h3>{prayer.name}</h3>
              </div>
              <p className={styles.time}>
                {prayerTimes[prayer.key] || '--:--'}
              </p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PrayerPage;
