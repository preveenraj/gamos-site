import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Script from 'next/script';
import ArealMap from '@comp/ArealMap';
import Welcome from '@comp/Welcome';
import Quotes from '@comp/Quotes';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aswani Weds Vishnu</title>
        <meta name="description" content="We loved with a love that was more than love." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        id="tailwindjitcdn"
        src="https://unpkg.com/tailwindcss-jit-cdn"
        // onLoad={() => {
        // }}
      />

      <main className={styles.main}>
        <Welcome />
        <ArealMap />
      </main>

      <footer className={styles.footer}>
        Powered by{' '}
        <span className={styles.logo}>
          <Image src="https://firebasestorage.googleapis.com/v0/b/portfolio-bb9f1.appspot.com/o/images%2Fprrelax.png?alt=media&token=5e05bc37-9ebe-4c27-ab38-163a09472160" alt="Techrush Logo" width={72} height={72} />
        </span>
      </footer>
    </div>
  );
};

export default Home;
