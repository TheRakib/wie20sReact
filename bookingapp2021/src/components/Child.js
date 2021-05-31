import React, {useState, useEffect} from 'react'

import firestore from "./FirebaseConfig";


import dotenv from 'dotenv'

dotenv.config();


console.log(process.env.REACT_AUTHDOMAIN)
// process.env

function Child({children}) {
    const [firebaseData, setFirebaseData] = useState("")
   useEffect(()=> {
  
    const fetchData= async ()=> {
    const res =  await firestore.collection("test").doc('Zs9rP8v1HRer7t5sk1s1').get() ;


    
    setFirebaseData(res.data().name)


    console.log(res.data().name)
   

  }


   fetchData();

}, [])



// Vi kan skriva in i collection
function setFirebaseCollection(){
    firestore.collection("test").add({
        name: "Vi skriver data i firebase",  
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        console.log("Document written with ID: ", docRef);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
    

}
  

    return (
        <div>
             {children}
             this is the child element
            {firebaseData}


            <button onClick={setFirebaseCollection}> Skriva in i firebase </button>
        </div>
    )
}

export default Child
