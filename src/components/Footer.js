import React from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp} from 'react-icons/fa';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialMedia}>
        <a href="https://www.facebook.com/profile.php?id=61562626276046" target="_blank" rel="noopener noreferrer">
          <FaFacebook className={styles.icon} />
        </a>
        <a href="https://x.com/swifteduassign" target="_blank" rel="noopener noreferrer">
          <FaTwitter className={styles.icon} />
        </a>
        <a href="https://wa.me/17533007236" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className={styles.icon} />
        </a>
      </div>
      <div className={styles.quickLinks}>
        <a href="#home">Home</a>
        <a href="#about-us">About Us</a>
        <a href="#services">Services</a>
        <a href="#blog">Blog</a>
        <a href="#contact-us">Contact Us</a>
      </div>
      <div className={styles.legal}>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
      </div>
    </footer>
  );
}

export default Footer;
