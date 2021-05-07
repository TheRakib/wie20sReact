import React from 'react'
import axios from 'axios';


function ForgotPassword() {

function resetRequest() {
        axios
        .post('http://localhost:1337/auth/forgot-password', {
          email: 'rraakkiibb0110@gmail.com', // user's email
        })
        .then(response => {
          console.log('Your user received an email', response);
        })
        .catch(error => {
          console.log('An error occurred:', error.response);
        });
    }
  
   
  

// Request API.

    return (
        <div>
           
            lösenord återställning
             <button onClick={resetRequest} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" >
                  återställa lösenord   
            </button>
          
        </div>
    )
}

export default ForgotPassword
