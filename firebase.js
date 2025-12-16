// firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyDaZl3MtYPutJMY1aqozvVoN8WbjNnlW20",
  authDomain: "starline-social.firebaseapp.com",
  projectId: "starline-social",
  storageBucket: "starline-social.appspot.com",
  messagingSenderId: "902689303596",
  appId: "1:902689303596:web:b77d39e05d51c5b8993589",
  measurementId: "G-647YLJZ7BS"
};

// Initialize Firebase (compat version)
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
