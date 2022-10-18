// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCE4RcK0Yh_wX3uNK5Qp6l5gYCtvPqZBZw",
  authDomain: "facebookbyvm.firebaseapp.com",
  projectId: "facebookbyvm",
  storageBucket: "facebookbyvm.appspot.com",
  messagingSenderId: "772958059854",
  appId: "1:772958059854:web:9f451d5463d5399874f21f",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, database, storage };
