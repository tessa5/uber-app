
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAekW-fDcgD1JDSPnRI5A_RQ2cmbpNMzWs",
    authDomain: "uber-app-fad4f.firebaseapp.com",
    projectId: "uber-app-fad4f",
    storageBucket: "uber-app-fad4f.appspot.com",
    messagingSenderId: "287495518813",
    appId: "1:287495518813:web:72f8ace4f48409f0b9ebb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export {app, provider, auth}