import React from 'react';
import styles from '../styles/HowItWorks.module.css';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className={styles.howItWorks}>
      <h2>How It Works</h2>
      <div className={styles.stepsContainer}>
        <div className={styles.step}>
          <h3>1. Submit Your Request</h3>
          <p>Tell us what you need help with.</p>
        </div>
        <div className={styles.step}>
          <h3>2. Timely Assignment Delivery</h3>
          <p>We deliver assignments on time and with great accuracy.</p>
        </div>
        <div className={styles.step}>
          <h3>3. Achieve Your Goals</h3>
          <p>Get your work done and improve your grades.</p>
        </div>
      </div>
      <p className={styles.finalNote}>Expect the best grades!!</p>
    </section>
  );
}

export default HowItWorks;
