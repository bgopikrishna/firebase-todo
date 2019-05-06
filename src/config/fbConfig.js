import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCuozM6Z50iY43OpOhLlGhuUAGRLGZHuRg",
  authDomain: "getitdone-c03bc.firebaseapp.com",
  databaseURL: "https://getitdone-c03bc.firebaseio.com",
  projectId: "getitdone-c03bc",
  storageBucket: "getitdone-c03bc.appspot.com",
  messagingSenderId: "171552434119",
  appId: "1:171552434119:web:c51f18a96754c143"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;
