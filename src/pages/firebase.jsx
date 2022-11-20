import firebase from "firebase/app";
import "firebase/auth";
import "firebase/analytics";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUKEysHradcVHRsPkalL3BwrJsp-r7OO0",
  authDomain: "v-note-c1c11.firebaseapp.com",
  projectId: "v-note-c1c11",
  storageBucket: "v-note-c1c11.appspot.com",
  messagingSenderId: "895783508660",
  appId: "1:895783508660:web:9b746721761fa690e815e1",
  measurementId: "G-2NMDCJV9M3"
};
firebase.initializeApp(firebaseConfig);
