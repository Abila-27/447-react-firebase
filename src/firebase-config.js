import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCSieRroN0Z3ZIrrEq5tkB9EZzkhzdLkjs",
    authDomain: "fir-ae58a.firebaseapp.com",
    projectId: "fir-ae58a",
    storageBucket: "fir-ae58a.appspot.com",
    messagingSenderId: "916601965900",
    appId: "1:916601965900:web:e041a7b7be46b656f553e9",
    measurementId: "G-JYH7CNR4BT"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);