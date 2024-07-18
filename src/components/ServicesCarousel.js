import React from 'react';
import Slider from 'react-slick';
import styles from '../styles/ServicesCarousel.module.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function ServicesCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className={styles.carouselSection}>
      <Slider {...settings}>
        <div className={styles.serviceSlide}>
          <img src="ass.png" alt="Assignment Help" />
          <div className={styles.serviceInfo}>
            <h3>Expert Assignment Help</h3>
            <p>Get professional assistance with your assignments from our experienced experts.</p>
          </div>
        </div>
        <div className={styles.serviceSlide}>
          <img src="prog.jpeg" alt="Personalized Tutoring" />
          <div className={styles.serviceInfo}>
            <h3>Personalized Web Development Tutoring</h3>
            <p>Learn web development with personalized tutoring sessions tailored to your needs.</p>
          </div>
        </div>
        <div className={styles.serviceSlide}>
          <img src="online.jpeg" alt="Online Class Assistance" />
          <div className={styles.serviceInfo}>
            <h3>Comprehensive Online Class Assistance</h3>
            <p>Receive support and guidance for your online classes to ensure you succeed.</p>
          </div>
        </div>
      </Slider>
    </section>
  );
}

export default ServicesCarousel;
