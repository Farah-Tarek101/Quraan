import { useState, useEffect, createContext, useContext } from 'react';

// Create a Theme Context
const ThemeContext = createContext(null);

// Theme Provider Component
export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark';
    });

    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (isDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    const toggleTheme = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsDark(!isDark);
        }, 500);
        setTimeout(() => {
            setIsAnimating(false);
        }, 1000);
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
            {/* Screen transition overlay */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                pointerEvents: 'none',
                zIndex: 9999,
                background: isDark
                    ? 'radial-gradient(circle at top left, #000000 0%, transparent 70%)'
                    : 'radial-gradient(circle at top left, #ffffff 0%, transparent 70%)',
                opacity: isAnimating ? 1 : 0,
                transform: isAnimating ? 'scale(3)' : 'scale(0)',
                transformOrigin: 'top left',
                transition: 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}></div>
        </ThemeContext.Provider>
    );
};

// Custom hook to use the theme context
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

// Theme Toggle Button Component
const ThemeToggle = () => {
    const { isDark, toggleTheme } = useTheme();

    const buttonStyle = {
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontSize: '2rem',
        color: 'var(--text-color)',
        transition: 'color var(--transition-normal)',
        animation: 'spin 2s linear infinite',
    };

    return (
        <button
            style={buttonStyle}
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
        >
            {isDark ? '☀️' : '🌙'}
        </button>
    );
};

export default ThemeToggle; 