// firebase.js
// This is included only in pages that need Firebase: feed.html, profile.html

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDaZl3MtYPutJMY1aqozvVoN8WbjNnlW20",
  authDomain: "starline-social.firebaseapp.com",
  projectId: "starline-social",
  messagingSenderId: "902689303596",
  appId: "1:902689303596:web:b77d39e05d51c5b8993589"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
