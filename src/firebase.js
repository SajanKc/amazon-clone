import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAaIQe3_faXYY3y1Z2pOJmqmv3VfmNp-9M",
  authDomain: "clone-31518.firebaseapp.com",
  databaseURL: "https://clone-31518.firebaseio.com",
  projectId: "clone-31518",
  storageBucket: "clone-31518.appspot.com",
  messagingSenderId: "219698084369",
  appId: "1:219698084369:web:e34d31552481c150d60fb0",
  measurementId: "G-MELNXTHMX9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };