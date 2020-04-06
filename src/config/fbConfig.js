import firebase from 'firebase/app'
// import db
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCTKWiAIBp-BbbK70bxNK012oRUIQv4Buk",
    authDomain: "quarantine-corner.firebaseapp.com",
    databaseURL: "https://quarantine-corner.firebaseio.com",
    projectId: "quarantine-corner",
    storageBucket: "quarantine-corner.appspot.com",
    messagingSenderId: "148806827821",
    appId: "1:148806827821:web:7578252f203a00da619da4",
    measurementId: "G-ZTYF8SFKT9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;