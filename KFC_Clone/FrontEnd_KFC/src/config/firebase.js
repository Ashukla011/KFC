import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBaaWLmkR4aBk1nCMPs3POjK8iHrcHGhBQ",
  authDomain: "food-e-commerce-d1188.firebaseapp.com",
  projectId: "food-e-commerce-d1188",
  storageBucket: "food-e-commerce-d1188.firebasestorage.app",
  messagingSenderId: "925356231858",
  appId: "1:925356231858:web:ee44647e4a3b6b7c2f4dab",
  measurementId: "G-2KMLV0SG96"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
