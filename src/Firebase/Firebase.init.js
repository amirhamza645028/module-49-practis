// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx77_9aYOOyUzvTLE3G6REE0MjI8vEhIo",
  authDomain: "module-49-practis.firebaseapp.com",
  projectId: "module-49-practis",
  storageBucket: "module-49-practis.appspot.com",
  messagingSenderId: "329315526812",
  appId: "1:329315526812:web:4d1d29e8bd9c91ad896559"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth ;