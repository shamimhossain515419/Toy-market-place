// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDW8vjb-4JUI8uGNJbQ6sOJ2JekEzwT5IU",
  authDomain: "toy-marketplace-13078.firebaseapp.com",
  projectId: "toy-marketplace-13078",
  storageBucket: "toy-marketplace-13078.appspot.com",
  messagingSenderId: "615960541874",
  appId: "1:615960541874:web:56b4b4edd238ea6f18e7ab",
  measurementId: "G-WZLQCXT6Z4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;