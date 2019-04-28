import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCnkoyk3lKiKSHQgDQvEkxyBmgJT5vYwdg",
    authDomain: "myproject2-85ef5.firebaseapp.com",
    databaseURL: "https://myproject2-85ef5.firebaseio.com",
    projectId: "myproject2-85ef5",
    storageBucket: "myproject2-85ef5.appspot.com",
    messagingSenderId: "976364462125"
  };
  firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
