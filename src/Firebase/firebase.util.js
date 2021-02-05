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

export const createUserProfile = async (userData, addtionalData) => {
  if (!userData) return;

  //   reference doesnot post request to server but simply return an object
  const userRef = firestore.doc(`users/${userData.uid}`);

  //   snapshot is where data can be fetched. use get() on reference object to fetch data
  const userSnapshot = await userRef.get();

  if (!userSnapshot.exists) {
    const { displayName, email, uid } = userData;
    const createdAt = new Date();

    try {
      // use set() to add data to database
      await userRef.set({
        uid,
        displayName,
        email,
        createdAt,
        ...addtionalData,
      });
    } catch (error) {
      console.log("Something went wrong while creating user", error);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
