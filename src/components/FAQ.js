import React, { useState } from 'react';
import styles from '../styles/FAQ.module.css';

const FAQ = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(null);

  const toggleAnswer = (index) => {
    if (visibleAnswer === index) {
      setVisibleAnswer(null);
    } else {
      setVisibleAnswer(index);
    }
  };

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer assignment help, tutoring services, and online class assistance."
    },
    {
      question: "How do I get started?",
      answer: 'Simply submit your request and alert our support team via <a href="https://wa.me/17533007236" target="_blank" rel="noopener noreferrer">WhatsApp</a>.'
    }
    // Add more FAQs as needed
  ];

  return (
    <section id="faq" className={styles.faq}>
      <h2>FAQs</h2>
      {faqs.map((faq, index) => (
        <div key={index} className={styles.question} onClick={() => toggleAnswer(index)}>
          <h3>{faq.question}</h3>
          {visibleAnswer === index && (
            <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
          )}
        </div>
      ))}
    </section>
  );
}

export default FAQ;
