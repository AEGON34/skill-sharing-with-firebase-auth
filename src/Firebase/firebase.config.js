// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLpK5xppEzJBIGxFBe-j4_S0ofM9Tf4DQ",
  authDomain: "skill-project-187a6.firebaseapp.com",
  projectId: "skill-project-187a6",
  storageBucket: "skill-project-187a6.firebasestorage.app",
  messagingSenderId: "817382841545",
  appId: "1:817382841545:web:ad0e7a8cce380164e04118"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);