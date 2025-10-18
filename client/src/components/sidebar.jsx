import React from 'react';
import { Link } from 'react-router-dom';
import sidebarStyles from './sidebar.module.css';
import ThemeToggle from './ThemeToggle';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`${sidebarStyles.sidebar} ${isOpen ? sidebarStyles.open : ''}`}>
      <div className={sidebarStyles.sidebarHeader}>
        <div className={sidebarStyles.logo}>
          <span className={sidebarStyles.logoIcon}>☪</span>
          <span className={sidebarStyles.logoText}>DEEN</span>
        </div>
        <button className={sidebarStyles.closeButton} onClick={toggleSidebar}>×</button>
      </div>
      
      <nav className={sidebarStyles.navigation}>
        <div className={sidebarStyles.navSection}>
          <h3 className={sidebarStyles.sectionTitle}>Main Navigation</h3>
          <ul className={sidebarStyles.options}>
            <li className={sidebarStyles.option}>
              <Link to="/" className={sidebarStyles.navLink}>
                <span className={sidebarStyles.navIcon}>🏠</span>
                <span>Home</span>
              </Link>
            </li>
            <li className={sidebarStyles.option}>
              <Link to="/quran" className={sidebarStyles.navLink}>
                <span className={sidebarStyles.navIcon}>📖</span>
                <span>Quran</span>
              </Link>
            </li>
            <li className={sidebarStyles.option}>
              <Link to="/daily-verses" className={sidebarStyles.navLink}>
                <span className={sidebarStyles.navIcon}>🌟</span>
                <span>Daily Verses</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className={sidebarStyles.navSection}>
          <h3 className={sidebarStyles.sectionTitle}>Islamic Resources</h3>
          <ul className={sidebarStyles.options}>
            <li className={sidebarStyles.option}>
              <Link to="/hadith" className={sidebarStyles.navLink}>
                <span className={sidebarStyles.navIcon}>📚</span>
                <span>Hadith Collection</span>
              </Link>
            </li>
            <li className={sidebarStyles.option}>
              <Link to="/prayers" className={sidebarStyles.navLink}>
                <span className={sidebarStyles.navIcon}>🕌</span>
                <span>Islamic Prayers</span>
              </Link>
            </li>
            <li className={sidebarStyles.option}>
              <Link to="/tafsir" className={sidebarStyles.navLink}>
                <span className={sidebarStyles.navIcon}>🔍</span>
                <span>Quran Tafsir</span>
              </Link>
            </li>
            <li className={sidebarStyles.option}>
              <Link to="/calendar" className={sidebarStyles.navLink}>
                <span className={sidebarStyles.navIcon}>📅</span>
                <span>Islamic Calendar</span>
              </Link>
            </li>
            <li className={sidebarStyles.option}>
              <Link to="/qibla" className={sidebarStyles.navLink}>
                <span className={sidebarStyles.navIcon}>🧭</span>
                <span>Qibla Direction</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className={sidebarStyles.navSection}>
          <h3 className={sidebarStyles.sectionTitle}>Account</h3>
          <ul className={sidebarStyles.options}>
            <li className={sidebarStyles.option}>
              <Link to="/login" className={sidebarStyles.navLink}>
                <span className={sidebarStyles.navIcon}>🔐</span>
                <span>Log In</span>
              </Link>
            </li>
            <li className={sidebarStyles.option}>
              <Link to="/signup" className={sidebarStyles.navLink}>
                <span className={sidebarStyles.navIcon}>✍️</span>
                <span>Sign Up</span>
              </Link>
            </li>
            <li className={sidebarStyles.option}>
              <Link to="/profile" className={sidebarStyles.navLink}>
                <span className={sidebarStyles.navIcon}>👤</span>
                <span>Profile</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className={sidebarStyles.sidebarFooter}>
        <div className={sidebarStyles.themeToggle}>
          <ThemeToggle />
        </div>
        <div className={sidebarStyles.footerText}>
          <p>May Allah guide us all</p>
          <small>DEEN - Your Islamic Companion</small>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
