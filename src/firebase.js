// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJfwf9RzFhf80ip3MSl8DWk3NyUjsW_u8",
  authDomain: "inventory-app-15a9d.firebaseapp.com",
  projectId: "inventory-app-15a9d",
  storageBucket: "inventory-app-15a9d.appspot.com",
  messagingSenderId: "84114066604",
  appId: "1:84114066604:web:3ecfb1cfdd3d8c9a5f2309",
  measurementId: "G-4TWFV0ZDYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);