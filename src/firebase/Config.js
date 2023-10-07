// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYxWCy68x3_qjJyaZC0194C8sLuGO5fMg",
  authDomain: "realtor-d2cb7.firebaseapp.com",
  projectId: "realtor-d2cb7",
  storageBucket: "realtor-d2cb7.appspot.com",
  messagingSenderId: "647557545427",
  appId: "1:647557545427:web:f47a46cd3f72290ddbc326"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);