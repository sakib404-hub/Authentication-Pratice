//? Importing the Firebase Inititalization and getAuth
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5LkvQSbOCdlxW7VlQngji0bKwMtNWsTs",
  authDomain: "simple-firebase-authenti-b1bac.firebaseapp.com",
  projectId: "simple-firebase-authenti-b1bac",
  storageBucket: "simple-firebase-authenti-b1bac.firebasestorage.app",
  messagingSenderId: "734489850525",
  appId: "1:734489850525:web:522dad4d71c9fbc6c19a74",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
