import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyA_oPfDVCIjsH3x6lzr2iMubFLGI0ERBh8",
    authDomain: "travesia-digital-etapa-4.firebaseapp.com",
    databaseURL:"https://travesia-digital-etapa-4-default-rtdb.firebaseio.com",
    projectId: "travesia-digital-etapa-4",
    storageBucket: "travesia-digital-etapa-4.appspot.com",
    messagingSenderId: "113633010205",
    appId: "1:113633010205:web:37db2576e6dd0575cddcf4"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
