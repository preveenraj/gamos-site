import React from 'react';
import styles from '@styles/Welcome.module.css';

const Welcome = () => {
  return (
    <div className='relative h-screen w-full flex justify-center'>
      <div className={styles.banner}></div>
    </div>
  );
};

export default Welcome;
