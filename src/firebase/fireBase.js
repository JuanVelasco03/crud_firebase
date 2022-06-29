// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUabBj-Quu8TOgPOZBzcInHAbPoZgl3gM",
  authDomain: "fbcrud-9450e.firebaseapp.com",
  projectId: "fbcrud-9450e",
  storageBucket: "fbcrud-9450e.appspot.com",
  messagingSenderId: "1021444967723",
  appId: "1:1021444967723:web:e1ac0a9dd7fbf74245896e"
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();




