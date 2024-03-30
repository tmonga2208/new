// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjDlYRAORXoGOVG5BGcn7rzWxHbIHrz5Y",
  authDomain: "story-time-3127b.firebaseapp.com",
  databaseURL: "https://story-time-3127b-default-rtdb.firebaseio.com",
  projectId: "story-time-3127b",
  storageBucket: "story-time-3127b.appspot.com",
  messagingSenderId: "172026169157",
  appId: "1:172026169157:web:78e810a6e6cdb8acc3202c",
  measurementId: "G-J9R6PBKP9L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore =getFirestore(app);
const auth = getAuth(app);

export { app, analytics, firestore, auth };