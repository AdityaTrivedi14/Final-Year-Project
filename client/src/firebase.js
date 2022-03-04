import firebase from "firebase/app"


const firebaseConfig = {
    apiKey: "AIzaSyB1v5qTeqbZx7P5SG4FJZ7mtOLStId_n8o",
    authDomain: "tiktok-63454.firebaseapp.com",
    databaseURL: "https://tiktok-63454.firebaseio.com",
    projectId: "tiktok-63454",
    storageBucket: "tiktok-63454.appspot.com",
    messagingSenderId: "328199029842",
    appId: "1:328199029842:web:014b4bfbc586a2ab368b8b",
    measurementId: "G-JPVR8X0734"
  };

var firebaseApp=firebase.initializeApp(firebaseConfig)

var db = firebaseApp.firestore()
export default db  ;