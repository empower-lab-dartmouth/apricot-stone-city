// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Hosting: https://firebase.google.com/docs/hosting/quickstart?authuser=0

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDS2H2llEAWs7I77pcgusHD6bap4Shh3WM',
  authDomain: 'apricot-stone-city.firebaseapp.com',
  projectId: 'apricot-stone-city',
  storageBucket: 'apricot-stone-city.appspot.com',
  messagingSenderId: '58116626214',
  appId: '1:58116626214:web:12f0889e578b8a3fb553e7',
  measurementId: 'G-2DZZRXHCH7',
};

// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);
// export const firebaseAnalytics = getAnalytics(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
