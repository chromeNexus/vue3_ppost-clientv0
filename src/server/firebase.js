import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import "firebase/functions";
const firebaseConfig = {
  apiKey: "AIzaSyA4L9_-VBgrZZmRi5f8gz02JUkAuQm47R8",
  authDomain: "pigeonpost-1551079261158.firebaseapp.com",
  projectId: "pigeonpost-1551079261158",
  storageBucket: "pigeonpost-1551079261158.appspot.com",
  messagingSenderId: "690692730948",
  appId: "1:690692730948:web:4c2a04c418c3d5e06c4c11",
  measurementId: "G-9H9D418KQ0",
};
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();
export const wf = firebase.functions();
// added to test alt auth
export const fb = firebase;