// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3a-kedKVGMCJ5aug56OkdMmKjjPbxV8I",
  authDomain: "fir-project-29466.firebaseapp.com",
  databaseURL: "https://fir-project-29466-default-rtdb.firebaseio.com",
  projectId: "fir-project-29466",
  storageBucket: "fir-project-29466.appspot.com",
  messagingSenderId: "652120835112",
  appId: "1:652120835112:web:1c0aa492741b475c1aa11d",
  measurementId: "G-JNJFY158TF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
