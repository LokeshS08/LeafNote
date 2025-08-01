// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMZxFvMHpVv1oUl9OWUy-AWnB-N80WM3I",
  authDomain: "leafnote-08.firebaseapp.com",
  projectId: "leafnote-08",
  storageBucket: "leafnote-08.firebasestorage.app",
  messagingSenderId: "577380065570",
  appId: "1:577380065570:web:c1085ecffb7d9ec2e1857b",
  measurementId: "G-BLL0K95QQ6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
