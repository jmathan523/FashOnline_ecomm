import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyDIY2qsaa9ScwAGMz5GkETMh9dAW5mJ9cc",
  authDomain: "fashonline-a73b2.firebaseapp.com",
  projectId: "fashonline-a73b2",
  storageBucket: "fashonline-a73b2.appspot.com",
  messagingSenderId: "415926914941",
  appId: "1:415926914941:web:93b21373bd0dde2d6a8614",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
// console.log(auth);

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
