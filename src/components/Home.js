import React from 'react';
import styles from '../styles/Home.module.css';

function Home() {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.hero}>
        <h1>Empowering Your Academic Journey!</h1>
        <p>Expert Assignments, Personalized Web Development Tutoring, and Online Class Assistance</p>
        <div className={styles.ctaContainer}>
          <button className={styles.ctaButton}>Get Started</button>
          <button className={styles.ctaButton}>Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
