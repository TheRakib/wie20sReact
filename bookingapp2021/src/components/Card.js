import React, {useState, useEffect} from 'react';
import Modal from "react-modal";
import axios from "axios";

//import firestore from "../FirebaseConfig";


// CMS : for admin användare : - > heroku -> lägga mer resurser  


//managed services:- 
// firebase : for client användare , login, oauth, booking info, firebase storage for bilder. 


function Card( {productId, productName, price, description, image}   ) {

  

  
    const customStyles = {
        content : {
          background: "gray",
          height:"500px",
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };

      const initialValues = {

        name:"",
        timeToAppointment:"",
        mobile:null
      }




      // state
    const [modalIsOpen,setIsOpen] = useState(false);
    const [formValues, setFormValues] = useState(initialValues)
    const [userId, setUserId] = useState(localStorage.getItem("userId"))
    
    // 
    const [username , setUsername] = useState(localStorage.getItem("username"))
    const [token, setToken]= useState(localStorage.getItem("jwt"));




/* 
    useEffect(()=>{
        
        // läser data från localstorage
        const userId = localStorage.getItem("userId")
        //console.log(userId)
        //uppdaterar state
        setUserId(userId)
 
       }, [])
 */
    function openModal() {
        // if user is logged in setIsOpen to true 
        // if not use another state for instance showLogin(true)
        setIsOpen(true)
    }

   function closeModal() {

    setIsOpen(false)
   }

   //11.00 


   function onHandleChange(e) {

    setFormValues({...formValues, [e.target.name]:e.target.value})

   }

  async function onHandleSubmit(e){

    
       
    e.preventDefault();

    // gör en axios request 
    // 11.35 
    //console.log(formValues)

    // läsa data från localStorage 
    // 

   // console.log(Number(formValues.mobile)) 
    try {

        // om det är två ord 
   const response=  await axios.post("http://localhost:1337/user-bookings", {
        name:username,
        timeToAppointment:formValues.timeToAppointment,
        mobile:Number(formValues.mobile),
        // koppla username 
        users_permissions_user:userId
        
        //userId kommer från state som uppdateras av localstorage i useEffect
       // userId: 14,
       // productId: 1
    }, 
    {headers: {
        Authorization: `Bearer ${token}`,
      }  
    }
      )

    console.log(response)
}
catch(error) {

    console.log(error)
}
   }


 function  deleteCard() {
    

    // axios.delete("http://localhost:1337/product/2", {headers: {}})

 }

    return (
        
        <>

       
     
        <div className="py-6 mx-6" >
        <div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-1/3 bg-cover" > <img src={`http://localhost:1337${image.formats.small.url}`} alt="some image from database"/>
        </div> 
        <div className="w-2/3 p-4">
        <h1 className="text-gray-900 font-bold text-2xl">{productName}</h1>
        <p className="mt-2 text-gray-600 text-sm">{description}</p>
        <div className="flex item-center mt-2">
        <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
        <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
        <svg className="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
        <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
        <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
        </svg>
        </div>
        <div className="flex item-center justify-between mt-3">
        <h1 className="text-gray-700 font-bold text-xl">{price}</h1>
        <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded" onClick={openModal} >boka</button>
        <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded" onClick={deleteCard} >Delete</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form   onSubmit= {onHandleSubmit}>
              <input type="text" name="name" value={username}  onChange={onHandleChange} />
              <input type="text" name="timeToAppointment" value={formValues.timeToAppointment}  onChange={onHandleChange}  />
              <input type="number" name="mobile"  value={formValues.mobile}    onChange={onHandleChange} />
              <button type="submit">Send</button>
          </form>
        </Modal>




    



        </div>
        </div>
        </div>
        </div>
        
        </>
       
    )
}

export default Card
