import '../styles/globals.css'
import type { AppProps } from 'next/app'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-RtmBZ3S0g0kwns6QoqDzdIrZhTLZRmI",
  authDomain: "vishnu-weds.firebaseapp.com",
  projectId: "vishnu-weds",
  storageBucket: "vishnu-weds.appspot.com",
  messagingSenderId: "944997689442",
  appId: "1:944997689442:web:dd94f47e9d409ea6be493b",
  databaseURL: "https://vishnu-weds-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
