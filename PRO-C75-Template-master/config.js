import firebase from "firebase";
//require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyABImmyNtxqlCC0D0PCzi0-U1F31v8iYL0",
  authDomain: "ride-84a79.firebaseapp.com",
  projectId: "ride-84a79",
  storageBucket: "ride-84a79.appspot.com",
  messagingSenderId: "1033539463000",
  appId: "1:1033539463000:web:0749c6a96972cecc3f672d"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
