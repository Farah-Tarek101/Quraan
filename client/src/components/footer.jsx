import React from 'react';
import styles from './footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <div className={styles.footerInfoSection}>
            <h3>About Us</h3>
            <p>We offer booking trips in Egypt and also sell Pharaonic antiques for souvenirs.</p>
          </div>
          <div className={styles.footerInfoSection}>
            <h3>Our Services</h3>
            <ul>
              We provide a complete system for booking trips around the Arab Republic of Egypt.
            </ul>
          </div>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.footerContact}>
            <h3>Contact Us</h3>
            <p>
              Phone: <a href="tel:01004747447">123-456-7890</a>
            </p>
            <p>
              Email: <a href="mailto:MAATcompany@gmail.com">example@example.com</a>
            </p>
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/your-company-page" target="_blank" rel="noreferrer noopener">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.twitter.com/your-company-page" target="_blank" rel="noreferrer noopener">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          <div className={styles.footerInfoSection}>
            <h3>Rights</h3>
            <p>Copyright © 2024. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
