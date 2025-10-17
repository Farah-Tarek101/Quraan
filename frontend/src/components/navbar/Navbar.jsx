import { Link, useNavigate } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';
import style from './Navbar.module.css';
import logo from '../../assets/icons/logo.png';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext'; // Import useAuth

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth(); // Use the auth context
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirect to login page after logout
    setIsMenuOpen(false);
  };

  return (
    <nav className={style.navbar} dir='rtl'>
      <div className={style.logo}>
        <p>القرآن</p>
        <p>الكريم</p>
      </div>

      <ul className={`${style['nav-links']} arabic-text`}>
        <li><Link to="/">الرئيسية</Link></li>
        <li><Link to="/prayers">مواعيد الصلاة</Link></li>
        <li><Link to="/azkar">الأذكار</Link></li>
        <li><Link to="/quran">القرآن الكريم</Link></li>
        <li><Link to="/hadith">الأحاديث</Link></li>
        <li><Link to="/tasbih">التسبيح</Link></li>
        {user ? (
          <li><button onClick={handleLogout} className={style.logoutButton}>تسجيل الخروج</button></li>
        ) : (
          <>
            <li><Link to="/login">تسجيل الدخول</Link></li>
            <li><Link to="/signup">إنشاء حساب</Link></li>
          </>
        )}
      </ul>

      <div className={style.themeToggle}><ThemeToggle /></div>

      <Menu className={style.menu} onClick={() => setIsMenuOpen(!isMenuOpen)} />
      {isMenuOpen && (
        <div className={`${style.menuItems} ${isMenuOpen ? style.open : style.close}`}>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>الرئيسية</Link>
          <Link to="/prayers" onClick={() => setIsMenuOpen(false)}>مواعيد الصلاة</Link>
          <Link to="/azkar" onClick={() => setIsMenuOpen(false)}>الأذكار</Link>
          <Link to="/quran" onClick={() => setIsMenuOpen(false)}>القرآن الكريم</Link>
          <Link to="/hadith" onClick={() => setIsMenuOpen(false)}>الأحاديث</Link>
          <Link to="/tasbih" onClick={() => setIsMenuOpen(false)}>التسبيح</Link>
          {user ? (
            <button onClick={handleLogout} className={style.logoutButton}>تسجيل الخروج</button>
          ) : (
            <>
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>تسجيل الدخول</Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)}>إنشاء حساب</Link>
            </>
          )}
          <ThemeToggle />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
