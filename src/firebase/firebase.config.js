import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDqOvYkbtfF-qfOYfsxRO76vTbj2jALHLk",
  authDomain: "job-sekker.firebaseapp.com",
  projectId: "job-sekker",
  storageBucket: "job-sekker.appspot.com",
  messagingSenderId: "1012592820187",
  appId: "1:1012592820187:web:3388d106aaaec2d159f1fe",
  measurementId: "G-K4QZWYMJW9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
