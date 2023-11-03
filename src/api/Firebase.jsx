import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAS2LI0Rl9YO5tUkgw54hVLdWeS_m1nIS0",
  authDomain: "kh-miniproject.firebaseapp.com",
  projectId: "kh-miniproject",
  storageBucket: "kh-miniproject.appspot.com",
  messagingSenderId: "771366305841",
  appId: "1:771366305841:web:3f357071d12a3dda049510",
  measurementId: "G-1GCFN1TRRK",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
