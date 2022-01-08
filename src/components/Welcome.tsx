import React from 'react';
import styles from '@styles/Welcome.module.css';

const Welcome = () => {
  return (
    <div className='relative h-[50vh] w-full flex justify-center'>
      <div className="absolute h-full w-full">
        <div className={styles.back}></div>
        <div className={styles.love}></div>
        <div className={styles.love1}></div>
        <div className={styles.love2}></div>
      </div>
    </div>
  );
};

export default Welcome;
