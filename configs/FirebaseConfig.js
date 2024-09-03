// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASYQwZRdfAwqiJAkOPXIAWI3ZMElXDgYk",
  authDomain: "tpkhpsi.firebaseapp.com",
  projectId: "tpkhpsi",
  storageBucket: "tpkhpsi.appspot.com",
  messagingSenderId: "886608959125",
  appId: "1:886608959125:web:c511b28ebe15d9e73ded9c",
  measurementId: "G-M89KM0DYRL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
