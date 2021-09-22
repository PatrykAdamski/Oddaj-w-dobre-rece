import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqHABsUs59aZR6haZe3yMOWX8Lp9Fijkk",
  authDomain: "oddaj-w-dobre-rece.firebaseapp.com",
  projectId: "oddaj-w-dobre-rece",
  storageBucket: "oddaj-w-dobre-rece.appspot.com",
  messagingSenderId: "748981106676",
  appId: "1:748981106676:web:f8a5cbf3d2ab4f9326eba1",
  measurementId: "G-FYECHTV05R",
};
// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// appId: process.env.REACT_APP_FIREBASE_APP_ID,

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
