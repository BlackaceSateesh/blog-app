import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import 'firebase/compat/firestore'
import "firebase/compat/storage";

firebase.initializeApp({
  apiKey: "AIzaSyClTJQxUFqTNlPAxuFzYDIgA17mIAu9nQY",
  authDomain: "jahnavi-blog-730.firebaseapp.com",
  projectId: "jahnavi-blog-730",
  storageBucket: "jahnavi-blog-730.appspot.com",
  messagingSenderId: "1058973751696",
  appId: "1:1058973751696:web:a664bfc0a59d7c48edfb15",
  measurementId: "G-SHEEP3FWS6",
  storageBucket: "gs://jahnavi-blog-730.appspot.com"
});

const fb = firebase;

export default fb;