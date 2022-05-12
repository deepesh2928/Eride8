import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDUwMDQFPKYAcA2ybKbyvo_9c6rAjZNVyQ",
  authDomain: "eride-81e7c.firebaseapp.com",
  projectId: "eride-81e7c",
  storageBucket: "eride-81e7c.appspot.com",
  messagingSenderId: "229695957444",
  appId: "1:229695957444:web:2d1b93530967fe3f5c9c91"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
