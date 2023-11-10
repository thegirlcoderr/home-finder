import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


// Your web app's Firebase configuration
const REACT_APP_appId = "1: 83059426889: web: cbacfbe4db55886fde6198"
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: REACT_APP_appId
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()