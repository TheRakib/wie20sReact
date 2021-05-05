import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";
import Login from "./Login"
import axios from "axios";


// useHistory
function Registration() {

  const intialValue = {
      username:"",
      email:"",
      password:""
  }

  const [registerValues, setRegisterValues] = useState(intialValue)
  const [username, setUsername] = useState("");
  const [loggedIn, SetLoggedIn] = useState(false);
  const [auth, setAuth] = useState("Login")
  const [error, setError] = useState("")
  const history = useHistory();

    // onchange ?? 
    
function handleOnChange(e) {

       setRegisterValues({...registerValues, [e.target.name]: e.target.value})
}

function handleOnSubmit(e) {
       e.preventDefault();

       // registerValues.username, 

       //?? 
      
      axios.post('http://localhost:1337/auth/local/register', {
                username: registerValues.username,
                email: registerValues.email,
                password: registerValues.password,
            })
            .then( (e)=> {  
                
                if(e.data.user) 
                //history.push("/login")
                SetLoggedIn(true)
                // redirect user login page
            
            })
            .catch((err)=> {setError(err.response.data.message[0].messages[0].message)}) 
            // async ()=>  const response =   await axios.post()
            // response
            // apirequest.then( (response)=>  console.log(response))
            //console.log(response)
          // vi ska skicka user registration data till strapi /enpoints 
    } 

    function changeToLogin() {
       SetLoggedIn(true)
    }

    function changeToRegister() {
        SetLoggedIn(false)
     }

    // gör så att när användare submit form ska användare få : du är registerat nu meddelandet
    //  conditional rendering. 

   /*  // componentDidMount
    useEffect(() => {
        const registerUser = async () => {
            const response = await axios.post('http://localhost:1337/auth/local/register', {
                username: registerValues.username,
                email: registerValues.email,
                password: registerValues.password,
            })
            console.log(response)

        }

       // registerUser()


        const loginUser = async()=> {
          const res=   await axios
            .post('http://localhost:1337/auth/local', {
              identifier: 'user@strapi.io',
              password: 'strapiPassword',
            })

            console.log("login response" , res)
        }

       // loginUser();

        //"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjE5NzcxMTg0LCJleHAiOjE2MjIzNjMxODR9.TlS1oiLpE39bt3BImgdypSlmvwCrBbpb8XLcqGgfjms"

       


    }, [])
changeToRegister
 */


    return (
        <>
        {loggedIn ?  (<> 
        
        <Login/> 
        <button class="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black" onClick={changeToRegister}>
                              Change to Register
                            </button>
        
        
        </>) :(<div class="container max-w-full mx-auto md:py-24 px-6">
  <div class="max-w-sm mx-auto px-6">
        <div class="relative flex flex-wrap">
            <div class="w-full relative">
                <div class="md:mt-6">
                    <div class="text-center font-semibold text-black">
                    Register User  
                    </div>
                    
                    <form class="mt-8" x-data="{password: '',password_confirm: ''}"  onSubmit={handleOnSubmit}>
                        <div class="mx-auto max-w-lg ">
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600">Username</span>
                                <input placeholder="" type="text" name="username" value={registerValues.username} onChange={handleOnChange} 
                                       class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                            </div>
                            <div class="py-1">
                            <div className="text-purple-600"> {error}</div>
                                <span class="px-1 text-sm text-gray-600">Email</span>
                                <input placeholder="" type="email" name="email" value={registerValues.email} onChange={handleOnChange}
                                       class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                            </div>
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600">Password</span>
                                <input placeholder="" type="password" x-model="password" name="password" value={registerValues.password} onChange={handleOnChange}
                                       class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                            </div>
                            <div class="py-1">
                                <span class="px-1 text-sm text-gray-600">Password Confirm</span>
                                <input placeholder="" type="password" x-model="password_confirm"
                                       class="text-md block px-3 py-2 rounded-lg w-full
                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"/>
                            </div>     
                            <div class="flex justify-start">
                                <label class="block text-gray-500 font-bold my-4 flex items-center">
                                    <input class="leading-loose text-pink-600 top-0" type="checkbox"/>
                                    <span class="ml-2 text-sm py-2 text-gray-600 text-left">Accept the
                                          <a href="#"
                                             class="font-semibold text-black border-b-2 border-gray-200 hover:border-gray-500">
                                           Terms and Conditions of the site
                                          </a>and
                                          <a href="#"
                                             class="font-semibold text-black border-b-2 border-gray-200 hover:border-gray-500">
                                            the information data policy.</a>
                                    </span>
                                </label>
                            </div>
           <button class="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black" onClick={changeToLogin}>
                                Change to {auth}
                            </button>

                            <button class="mt-3 text-lg font-semibold
            bg-gray-800 w-full text-white rounded-lg
            px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
                                Register
                            </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    </div>)}          
</>    
    )
}

// 11.00 


export default Registration
