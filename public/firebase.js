// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC_er71xF6Sngps_TMmAcWJ6SGRyd3taWw',
  authDomain: 'test-app-741d7.firebaseapp.com',
  projectId: 'test-app-741d7',
  storageBucket: 'test-app-741d7.appspot.com',
  messagingSenderId: '394679417222',
  appId: '1:394679417222:web:81fcd42f481acac3af1407',
  measurementId: 'G-WLYK9NVG7F',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
console.log('Hello there, Firestore!');
