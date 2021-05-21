import React , {useState, useEffect}from 'react';
import {Link } from "react-router-dom";

//jsonwebtoken
function Menu() {
const [jwt, setJwt] = useState(null);

const [isAdmin, setIsAdmin]= useState(false);
const [token , setToken ]= useState(localStorage.getItem("jwt"))

// hooks -> life cycle method,  en component anropning-> render (JSX)  -> ComponentDidMount

// varje gång din state uppdateras , uppdaterar din component/jsx

                                    //-> componentDidUpdate -> componentwillUnmount
// life cycle method, -> componentDidRendered()
useEffect(()=>{
       const JWT = localStorage.getItem("jwt")
       setJwt(JWT)  
   //return ()=>  fun(); 
  },  [])


function clearLocalStorage() {
  localStorage.clear();
  window.location.reload();

}

return (   
     <>
     { jwt ? 
      ( <nav class="bg-gray-800">
       <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
       <div class="relative flex items-center justify-between h-16">
       <div class="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
        </div>
      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0 flex items-center">
          <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
          <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow"/>
        </div>
        <div className="hidden sm:block sm:ml-6">

          <div className="flex space-x-4">
           
            <Link to="/card" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Cardlist</Link>

{  isAdmin && token?  <Link to="/form" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Form</Link> :<> </>}
           
            
            <Link to="/bookningar" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Mina bookningar</Link>
            {/* <Link to="/logout" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">logout</Link>
 */}
          <button  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={clearLocalStorage}>logout</button>
          </div>

        </div>
      </div>
    </div>
  
</nav>): 


  ( <nav class="bg-gray-800">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
  <div class="relative flex items-center justify-between h-16">
  <div class="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
   </div>
 <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
   <div class="flex-shrink-0 flex items-center">
     <img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
     <img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow"/>
   </div>
   <div class="hidden sm:block sm:ml-6">

     <div class="flex space-x-4">
      
       <Link to="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Cardlist</Link>

 {isAdmin && token?    <Link to="/form" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Form</Link>: <> </>}

       <Link to="/login" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>

       <Link to="/register" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Register</Link>
     </div>

   </div>
 </div>
</div>

</nav>)
}

        </>
    )
}

export default Menu
