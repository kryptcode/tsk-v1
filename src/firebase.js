// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdVpQt755wpnfkbr-JYGPkXDrWt4KTkvY",
  authDomain: "task-mng-45081.firebaseapp.com",
  projectId: "task-mng-45081",
  storageBucket: "task-mng-45081.appspot.com",
  messagingSenderId: "1074686901354",
  appId: "1:1074686901354:web:24c3cbc9842ac18b945e13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }