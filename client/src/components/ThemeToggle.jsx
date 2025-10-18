import React, { useEffect, useState } from 'react';
import styles from './themeToggle.module.css';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`${styles.themeToggle} ${styles[theme]}`}>
      <button onClick={toggleTheme}>
        {theme === 'light' ? (
          <i className="fas fa-sun"></i>
        ) : (
          <i className="fas fa-moon"></i>
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
