import styles from './Footer.module.css';
import logo from '../../assets/icons/logo.png';
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
                <a href="#hero"> الرئيسية</a>
                <a href="#prayers"> مواعيد الصلاة </a>
                <a href="#azkar"> الأذكار </a>
                <a href="#quran"> القرآن الكريم </a>
                <a href="/"> الأحاديث </a>

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