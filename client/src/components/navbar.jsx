import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <Link to="/" className={styles.logoLink}>
            <span className={styles.logoIcon}>☪</span>
            <span className={styles.logoText}>DEEN</span>
          </Link>
        </div>
        
        <ul className={styles.navigation}>
          <li className={styles.navigationItem}>
            <Link to="/" className={styles.navLink}>
              <span className={styles.navIcon}>🏠</span>
              <span>Home</span>
            </Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/quran" className={styles.navLink}>
              <span className={styles.navIcon}>📖</span>
              <span>Quran</span>
            </Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/daily-verses" className={styles.navLink}>
              <span className={styles.navIcon}>🌟</span>
              <span>Daily Verses</span>
            </Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/hadith" className={styles.navLink}>
              <span className={styles.navIcon}>📚</span>
              <span>Hadith</span>
            </Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/prayers" className={styles.navLink}>
              <span className={styles.navIcon}>🕌</span>
              <span>Prayers</span>
            </Link>
          </li>
          <li className={styles.navigationItem}>
            <Link to="/aboutus" className={styles.navLink}>
              <span className={styles.navIcon}>ℹ️</span>
              <span>About Us</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
