import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyA_D6jg020ioTykzZNfuzZg1glQcUPJclU",
  authDomain: "crwn-db-ec4a6.firebaseapp.com",
  projectId: "crwn-db-ec4a6",
  storageBucket: "crwn-db-ec4a6.appspot.com",
  messagingSenderId: "22418993361",
  appId: "1:22418993361:web:288e13e8d6d6743e8c55f0",
  measurementId: "${config.measurementId}",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
