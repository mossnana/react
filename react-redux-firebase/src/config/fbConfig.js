import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Firebase Config
var config = {
  apiKey: "AIzaSyDskl7ElXoewQZHB9x7PrjclRuJscdzHao",
  authDomain: "we-ws-rrf.firebaseapp.com",
  databaseURL: "https://we-ws-rrf.firebaseio.com",
  projectId: "we-ws-rrf",
  storageBucket: "we-ws-rrf.appspot.com",
  messagingSenderId: "1001972856239"
};
firebase.initializeApp(config);
firebase.firestore();

console.log(firebase);
export default firebase;
