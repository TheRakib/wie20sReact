// npm install dotenv
import dotenv from 'dotenv'

import firebase from "firebase";

//  third party js boken

dotenv.config();



//  firebase 


console.log(process.env.REACT_APP_API_KEY)


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey:  process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId:process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: "461798086823",
    appId: process.env.REACT_APP_APPID,
    measurementId: "G-X1Q5W28HKF"
  };
  
  //kl. 10.00


  // Initialize Firebase
const firebaseApp= firebase.initializeApp(firebaseConfig);


// console log firebaseApp 

const firestore = firebaseApp.firestore()  // firebase firestore

const storage = firebaseApp.storage()

 


export default firestore;

  // hur kan vi skydda de api keys?
    // gitignore , separat fil med apikeys :- .env

    //10.00 

    // 11.00

    // vi kommer att läsa data från firebase 