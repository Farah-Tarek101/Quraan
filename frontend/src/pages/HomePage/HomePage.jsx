import { useEffect, useRef, useState } from 'react';
import { Play, Pause, BookOpen, Clock, Heart, Star } from 'lucide-react';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import styles from './HomePage.module.css';

const HomePage = () => {
  const [ayah, setAyah] = useState('');
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [ayahNumber, setAyahNumber] = useState(262);
  const audioRef = useRef(null);

  // Fetch ayah and audio
  useEffect(() => {
    fetch(`https://api.alquran.cloud/v1/ayah/${ayahNumber}/ar.alafasy`)
      .then(res => res.json())
      .then(data => {
        setAyah(data.data.text);
        setAudio(data.data.audio);
      })
      .catch(() => console.error('Failed to load Ayah'));
  }, [ayahNumber]);

  // Handle play/pause
  const handleAyahPlay = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Load new ayah
  const loadNewAyah = () => {
    const newNumber = Math.floor(Math.random() * 6236) + 1; // Total ayahs in Quran
    setAyahNumber(newNumber);
    setIsPlaying(false);
  };

  return (
    <div className={styles['app-container']} dir="rtl">
      <Navbar />
      
      {/* Hero Section */}
      <div className={styles.hero}>
        <h1>بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ</h1>
        {ayah && (
          <div className={styles.ayah}>
            <p>{ayah}</p>
            <div className={styles.ayahActions}>
              <button onClick={handleAyahPlay} className={styles['ayah-play-button']}>
                {isPlaying ? <Pause /> : <Play />}
                {isPlaying ? 'إيقاف' : 'تشغيل'}
              </button>
              <button onClick={loadNewAyah} className={styles.newAyahButton}>
                <Star />
                آية جديدة
              </button>
            </div>
          </div>
        )}
        <audio ref={audioRef} src={audio} style={{ display: 'none' }} />
      </div>

      {/* Welcome Section */}
      <div className={styles['welcome-section']}>
        <h2 className={styles['welcome-title']}>مرحباً بك في القرآن الكريم</h2>
        <p className={styles['welcome-text']}>
          اكتشف جمال القرآن الكريم من خلال تطبيقنا الذي يوفر لك قراءة الآيات، الاستماع للتلاوة، 
          الأذكار اليومية، مواعيد الصلاة، والأحاديث النبوية الشريفة. كل شيء في مكان واحد لتقوية 
          إيمانك وزيادة معرفتك الدينية.
        </p>
      </div>

      {/* Features Section */}
      <div className={styles.features}>
        <div className={styles.featureCard}>
          <BookOpen className={styles.featureIcon} />
          <h3>القرآن الكريم</h3>
          <p>اقرأ القرآن الكريم كاملاً مع التفسير والترجمة</p>
        </div>
        
        <div className={styles.featureCard}>
          <Clock className={styles.featureIcon} />
          <h3>مواعيد الصلاة</h3>
          <p>احصل على مواعيد الصلاة الدقيقة لموقعك الحالي</p>
        </div>
        
        <div className={styles.featureCard}>
          <Heart className={styles.featureIcon} />
          <h3>الأذكار</h3>
          <p>أذكار الصباح والمساء والنوم لتقوية الذكر</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
