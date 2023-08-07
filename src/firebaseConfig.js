



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzZsxp2iV0TDRf1KNPNosss6oX-JUcwis",
  authDomain: "quote-app-16df8.firebaseapp.com",
  projectId: "quote-app-16df8",
  storageBucket: "quote-app-16df8.appspot.com",
  messagingSenderId: "1070352970246",
  appId: "1:1070352970246:web:e6d4eb40d1a4cfe7a88987",
  measurementId: "G-W0VF78YNB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);