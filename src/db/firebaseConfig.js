// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGL44Za9ANiq-surVpHjouQO5CmCsmiLs",
  authDomain: "portfolio-djdj.firebaseapp.com",
  projectId: "portfolio-djdj",
  storageBucket: "portfolio-djdj.appspot.com",
  messagingSenderId: "959191601717",
  appId: "1:959191601717:web:96501624ffcace30ba977c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app);