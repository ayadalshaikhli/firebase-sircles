// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAwlhWJJfL9Xj3TZEJDiqPv98J4x15fXA",
  authDomain: "nextjs-sircles.firebaseapp.com",
  projectId: "nextjs-sircles",
  storageBucket: "nextjs-sircles.appspot.com",
  messagingSenderId: "769367632922",
  appId: "1:769367632922:web:6ce7e796ed459036e1b5a3",
  measurementId: "G-PXZ33Y72BZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
