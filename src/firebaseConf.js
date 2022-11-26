// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGvWM_WRIfoFBnEmlOfbIJJibaZ2rg378",
  authDomain: "todo-app-twk.firebaseapp.com",
  projectId: "todo-app-twk",
  storageBucket: "todo-app-twk.appspot.com",
  messagingSenderId: "203234590761",
  appId: "1:203234590761:web:01ba8d94f1684740d15c38",
  measurementId: "G-16PJP05NE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export { database };