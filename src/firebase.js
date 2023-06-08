// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9t-dLwacssVq5EsSqaIcPOEWi4hz2j7w",
  authDomain: "linkedin-clone-bf4aa.firebaseapp.com",
  projectId: "linkedin-clone-bf4aa",
  storageBucket: "linkedin-clone-bf4aa.appspot.com",
  messagingSenderId: "494203510405",
  appId: "1:494203510405:web:f789fc4b816044551c53ec",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
