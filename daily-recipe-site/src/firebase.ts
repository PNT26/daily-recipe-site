// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDttMn4YNqqyR5mS-gnHV6572pKUdgrBLw",
  authDomain: "daily-recipe-site.firebaseapp.com",
  projectId: "daily-recipe-site",
  storageBucket: "daily-recipe-site.appspot.com",
  messagingSenderId: "781733841061",
  appId: "1:781733841061:web:9a1584c7f4d806fb75254c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);