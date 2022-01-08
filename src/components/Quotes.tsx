import React from 'react';
import styles from '@styles/Quotes.module.css';

const Quotes = () => {
  return (
    <div className="hidden xl:flex">
      <div className={styles.quotesContainer}>
        <h1 className={styles.typewriterText}>{`You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.`}</h1>
      </div>
    </div>
  );
};

export default Quotes;
