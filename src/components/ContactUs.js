import React from 'react';
import styles from '../styles/ContactUs.module.css';
import { FaWhatsapp, FaEnvelope, FaComments } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section id="contact-us" className={styles.contactUs}>
      <h2>Contact Us</h2>
     
      <div className={styles.card}>
        <div className={styles.contactDetails}>
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.icon} />
            <p>Email: <a href="mailto:swifteduassignments@gmail.com">swifteduassignments@gmail.com</a></p>
          </div>
          <div className={styles.contactItem}>
            <FaWhatsapp className={styles.icon} />
            <p>WhatsApp: <a href="https://wa.me/17533007236">+1 753 300 7236</a></p>
          </div>
          <div className={styles.contactItem}>
            <FaComments className={styles.icon} />
            <p>Live Chat: Available 24/7</p>
          </div>
        </div>
      </div>
      <a href="https://wa.me/17533007236" className={styles.whatsappChat} target="_blank" rel="noopener noreferrer">
        <img src="wat.jpeg" alt="WhatsApp Chat" />
      </a>
    </section>
  );
}

export default ContactUs;
