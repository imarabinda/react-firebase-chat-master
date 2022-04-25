// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnkWFTzI7_5qQUYHvPRjvVAN1maGUZiXU",
  authDomain: "messaging-ffdfb.firebaseapp.com",
  databaseURL: "https://messaging-ffdfb-default-rtdb.firebaseio.com",
  projectId: "messaging-ffdfb",
  storageBucket: "messaging-ffdfb.appspot.com",
  messagingSenderId: "229618320144",
  appId: "1:229618320144:web:99826dfc04832bd47b9b95",
  measurementId: "G-L9KMNTPCBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
