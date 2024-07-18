import React from 'react';
import ServicesCarousel from './ServicesCarousel';
import styles from '../styles/AboutUs.module.css';

const AboutUs = () => {
  return (
    <section id="about-us" className={styles.aboutUs}>
      <div className={styles.container}>
        <h2>About Us</h2>
        <p>Our mission is to provide top-quality academic support through expert assignment assistance, personalized web development tutoring, and comprehensive online class help. We aim to make learning accessible and effective for everyone.</p>
        <ServicesCarousel />
        
      </div>
    </section>
  );
}

export default AboutUs;
