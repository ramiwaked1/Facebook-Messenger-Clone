import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDpyhfpB-NqW1FbNLOmVluBDHNGBlk7IMs",
    authDomain: "facebook-messenger-clone-7fc0b.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-7fc0b.firebaseio.com",
    projectId: "facebook-messenger-clone-7fc0b",
    storageBucket: "facebook-messenger-clone-7fc0b.appspot.com",
    messagingSenderId: "442606317761",
    appId: "1:442606317761:web:04b5e4777b7147c9252440",
    measurementId: "G-MVDHK1T7DJ"
});

const db = firebaseApp.firestore();

export default db;