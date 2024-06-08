// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-192df.firebaseapp.com",
  projectId: "mern-blog-192df",
  storageBucket: "mern-blog-192df.appspot.com",
  messagingSenderId: "44272446347",
  appId: "1:44272446347:web:33321bb5f604e5e084dd8e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);