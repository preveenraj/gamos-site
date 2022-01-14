import React from 'react';
import styles from '@styles/Welcome.module.css';

const Welcome = () => {
  return (
    <div className='relative h-max w-full flex justify-center'>
      <div className={styles.banner}></div>
      <div className="absolute right-0 h-full w-1/2 hidden lg:flex">
        <div className={styles.back}></div>
        <div className={styles.love}></div>
        <div className={styles.love1}></div>
        <div className={styles.love2}></div>
      </div>
    </div>
  );
};

export default Welcome;
