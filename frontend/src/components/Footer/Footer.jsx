import styles from './Footer.module.css';
import logo from '../../assets/icons/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer id='footer'>
            <div className={styles.logo}>
                <p>القرآن</p>
                <img src={logo} alt="logo" width={60} height={60} />
                <p>الكريم</p>

            </div>
          
          
            <div className={styles.sections}>
                <h2>الأقسام</h2>
                <Link to="/">الرئيسية</Link>
                <Link to="/prayers">مواعيد الصلاة</Link>
                <Link to="/azkar">الأذكار</Link>
                <Link to="/quran">القرآن الكريم</Link>
                <Link to="/hadith">الأحاديث</Link>
                <Link to="/tasbih">التسبيح</Link>
                <Link to="/login">تسجيل الدخول</Link>
                <Link to="/signup">إنشاء حساب</Link>
            </div>

            <div className={styles.links}>
                <h2>مواقع مفيدة</h2>
                <a href='https://www.dar-alifta.org/ar'> دار الإفتاء المصرية</a>
                <a href='https://binothaimeen.net/'>موقع ابن عثيمين</a>
                <a href='https://alimamaltayeb.com/'>موقع الامام احمد الطيب</a>
                <a href='https://surahquran.com/'>موقع القرآن الكريم</a>
                <a href='https://www.islamic-society.org/'>الجمعية الإسلامية العالمية</a>

            </div>
            <div className={styles.copyright}>
                <p>Developed by
                    <a href="www.linkedin.com/in/farah-tarek-ali" className={styles.developerLink} target="_blank" rel="noopener noreferrer"> Farah Tarek </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;