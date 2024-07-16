import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCZ6tOrj-pq3SgLzmg2kTezpJg9NRfx_fQ",
    authDomain: "fir-2e308.firebaseapp.com",
    projectId: "fir-2e308",
    storageBucket: "fir-2e308.appspot.com",
    messagingSenderId: "280362909810",
    appId: "1:280362909810:web:7d5679bc8e7a10a00d42eb",
    measurementId: "G-6PMMNN43QF"
  };

 export default  firebase.initializeApp(firebaseConfig)