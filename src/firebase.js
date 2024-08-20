// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEVzwQAARm4YAbztP5sLNr6aUVEiRH2w0",
  authDomain: "frica-ecom.firebaseapp.com",
  projectId: "frica-ecom",
  storageBucket: "frica-ecom.appspot.com",
  messagingSenderId: "475412566407",
  appId: "1:475412566407:web:db5e2f0cbbb615059c4322",
  measurementId: "G-6VRQQJE81W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize firestore
const db = getFirestore(app);

export {db};