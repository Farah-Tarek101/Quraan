import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Auth.module.css';
import authService from '../../services/authService'; // Import authService
import { useAuth } from '../../context/AuthContext'; // Import useAuth

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Use the login function from AuthContext

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await authService.login(email, password);
      login(userData); // Set user in AuthContext
      alert('Login successful!');
      navigate('/'); // Redirect to home on successful login
    } catch (error) {
      console.error('Login failed:', error.response.data.message || error.message);
      alert(error.response.data.message || 'Login failed');
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authCard}>
        <h2 className={styles.authTitle}>تسجيل الدخول</h2>
        <form onSubmit={handleSubmit} className={styles.authForm}>
          <div className={styles.formGroup}>
            <label htmlFor="email">البريد الإلكتروني</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.formInput}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">كلمة المرور</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className={styles.formInput}
            />
          </div>
          <button type="submit" className={styles.authButton}>تسجيل الدخول</button>
        </form>
        <p className={styles.authLink}>
          ليس لديك حساب؟ <Link to="/signup">إنشاء حساب</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
