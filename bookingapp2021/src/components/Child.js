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
    const data =  await firestore.collection("test").doc('Zs9rP8v1HRer7t5sk1s1') ;
  
    setFirebaseData(data)
   

  }


   fetchData();

}, [])
    
    return (
        <div>
             {children}
             this is the child element
            
        </div>
    )
}

export default Child
