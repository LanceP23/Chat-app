// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import{getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXIntiEK_r7S6RiB1Ju8--cHRDBgup9p4",
  authDomain: "fir-chatapp2-fe01b.firebaseapp.com",
  projectId: "fir-chatapp2-fe01b",
  storageBucket: "fir-chatapp2-fe01b.appspot.com",
  messagingSenderId: "505349511225",
  appId: "1:505349511225:web:717b5ef9ad0613ab3b95e8",
  measurementId: "G-4YLLX8ZZKM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = new getFirestore(app);