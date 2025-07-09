import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAV4MmTqGWzvtjmHZmNT1NRkva9yM19vAE",
  authDomain: "instagram-460f1.firebaseapp.com",
  projectId: "instagram-460f1",
  storageBucket: "instagram-460f1.firebasestorage.app",
  messagingSenderId: "813170681262  ",
  appId: "1:813170681262:web:592ac35bd24013e0bd143f",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
