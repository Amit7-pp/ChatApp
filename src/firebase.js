// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvvjMBDJmt7kcA_Zi1votF1FnjvlynStY",
  authDomain: "chats-82023.firebaseapp.com",
  projectId: "chats-82023",
  storageBucket: "chats-82023.appspot.com",
  messagingSenderId: "733187114214",
  appId: "1:733187114214:web:37c7a73fda17d306a46727"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth =getAuth()
export const storage =getStorage()
export const db = getFirestore()