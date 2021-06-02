// npm install dotenv
import dotenv from 'dotenv'

import firebase from "firebase";

dotenv.config();


console.log(process.env.REACT_APP_API_KEY)
// process.env

//  firebase 





// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey:  "AIzaSyDNWeNEF02bZ8WD4yJLfJnziMyvEWi8rlY",
    authDomain: "wie20s-46b8b.firebaseapp.com",
    projectId:"wie20s-46b8b",
    storageBucket: "wie20s-46b8b.appspot.com",
    messagingSenderId: "461798086823",
    appId: "1:461798086823:web:3590d97ec61f1214a16382",
    measurementId: "G-X1Q5W28HKF"
  };
  


  // Initialize Firebase
const firebaseApp= firebase.initializeApp(firebaseConfig);


// console log firebaseApp 

const firestore = firebaseApp.firestore()  // firebase firestore

 


export default firestore;

  // hur kan vi skydda de api keys?
    // gitignore , separat fil med apikeys :- .env

    //10.00 

    // 11.00

    // vi kommer att läsa data från firebase 