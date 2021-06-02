import React, {useEffect, useState} from 'react';
import axios from "axios";


// Ni som använder yarn : yarn add axios 
// npm : npm i axios 
function  API () {

    const [data , setData ] = useState([]);
    
    useEffect(()=>{
         const fetchData = async()=> {

            try {

          // anropa user-bookings  axios.get("http://localhost:1337/user-bookings"

                
         const response=   await axios.get("http://localhost:1337/user-bookings?users_permissions_user.id=14")
          // axios är ett fetch bibliotek , http get, post, update , delete  
          console.log(response.data)
          const res = response.data 
          // json.string
          setData(res)

         
        }
    
    catch(err) {
        console.log(err)    
    }
        
}
        fetchData()   
    }, [])



    // async function name() { 
    // const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
    // console.log(response)   }

    //  axios.get("https://jsonplaceholder.typicode.com/todos/1").then(  (response)=> console.log(response) )
    //  .catch(err => {console.log(err) }) 


    // try{    // async function name() { 
    // const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
    // console.log(response)   }
    //}  catch (err) { console.log(err) } 


    // vi ska inte lägga fetchData functionen utanför useEffect
    // I useEffect ni ska inte skriva ut state data.


    return (
    <>
    data kommer att kunna skriva ut här:-  
    {data.map(  e=> <div> {e.name} </div>)}
    <div> Hello from api </div> 
    </>
    
    )

}


export default API;

// varje gång din state uppdateras renderar din component.
// varje gång renderar din component körs useEffect. 
// state -> component -> useEffect 

// useEffect kan ha en default value.  default value kan det vara en state , flera state . 
// Om state ändras triggas useEffect

// useEffect kan ha en return /unmount 



// varningar:  1. useEffect(  ()=> { })  om du använder den här kommer din component 
                                                //inte veta när den skulle trigga useEffect  : oändling

            // 2. useEffect( ()=> { }, [data]  ) data här är en state som uppdateras av fetch data : oändling
            

// useEffect( ()=> { }, [])