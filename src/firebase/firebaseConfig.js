import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDmdwOkcsyyRMD_ETbUWyUad-Gko-c7a5o",
    authDomain: "tareasdelhogar-cc.firebaseapp.com",
    databaseURL: "https://tareasdelhogar-cc.firebaseio.com",
    projectId: "tareasdelhogar-cc",
    storageBucket: "tareasdelhogar-cc.appspot.com",
    messagingSenderId: "607482429115",
    appId: "1:607482429115:web:b3b5673272b260042bf39e",
    measurementId: "G-SPNTYJECZE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();
const storage = firebase.storage();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase,
    storage,
}