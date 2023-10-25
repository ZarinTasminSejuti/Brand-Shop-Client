// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlO0IcYQmu_9awD6kQg4kR4VF-1OUnL4w",
  authDomain: "auto-harbor-car-shop.firebaseapp.com",
  projectId: "auto-harbor-car-shop",
  storageBucket: "auto-harbor-car-shop.appspot.com",
  messagingSenderId: "1077383113896",
  appId: "1:1077383113896:web:deb8951044683eeeaa269d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;