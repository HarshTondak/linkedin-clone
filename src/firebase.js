import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA9t-dLwacssVq5EsSqaIcPOEWi4hz2j7w",
  authDomain: "linkedin-clone-bf4aa.firebaseapp.com",
  projectId: "linkedin-clone-bf4aa",
  storageBucket: "linkedin-clone-bf4aa.appspot.com",
  messagingSenderId: "494203510405",
  appId: "1:494203510405:web:f789fc4b816044551c53ec",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
