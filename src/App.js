import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Home />
      <AboutUs />
      <Services />
      <HowItWorks />
      <Testimonials />
      <FAQ />      
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
