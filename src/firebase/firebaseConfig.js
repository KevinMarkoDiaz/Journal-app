import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBJgAZ5C6WTsqKe83rn45d1i81YW-joyzo",
    authDomain: "reactappcurso-91630.firebaseapp.com",
    projectId: "reactappcurso-91630",
    storageBucket: "reactappcurso-91630.appspot.com",
    messagingSenderId: "217942529061",
    appId: "1:217942529061:web:e9648b4bae4e2eeb869bcc"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export {
    db,
    googleAuthProvider,
    firebase
};
