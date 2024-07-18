import React from 'react';
import styles from '../styles/Services.module.css';

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <h2>Our Services</h2>
      <div className={styles.serviceList}>
        <div className={styles.service}>
          <h3>Assignment Help</h3>
          <p>Get your assignments done by experts.</p>
        </div>
        <div className={styles.service}>
          <h3>Tutoring Services</h3>
          <p>Personalized Web Development tutoring.</p>
        </div>
        <div className={styles.service}>
          <h3>Online Class Assistance</h3>
          <p>We take online classes fully for you.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
