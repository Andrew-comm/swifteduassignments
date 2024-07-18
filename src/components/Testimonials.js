import React from 'react';
import styles from '../styles/Testimonials.module.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <h2>Testimonials</h2>
      <div className={styles.testimonial}>
        <p>"This service has been a game-changer for my academic life!"</p>
        <h4>Mathews Polly</h4>
      </div>
      <div className={styles.testimonial}>
        <p>"The tutors are really knowledgeable and helpful."</p>
        <h4>Annete Dillain</h4>
      </div>
      {/* Add more testimonials as needed */}
    </section>
  );
}

export default Testimonials;
