import React, {useState} from "react";
function Form() {
    // 5-9 minuter
    //onSubmit == handleSubmit
    // deklaerade en state
    // state ska ha koll på vad användare mater in

const initialValues = {
    name: "", 
    email:""
}
const [formValue, setFormValue] = useState(initialValues);
// Funktionen for onSubmit 
function handleSubmit(e) {
        e.preventDefault();
        console.log("name :",  "email :", )
        
    }
    
// onChange == handleOnChange 
function handleOnChange(e) { 
   // setName(e.target.value)
    //setName(e.target.value)
//console.log({[e.target.name] : e.target.value })
   // ändra value
   // setEmail(e.target.value)
   // console.log({[e.target.name]:e.target.value})

   setFormValue( )

   
  }

  //Kl. 11.00
  // controlled element: 
      // om vi har onchange funktion
      // om vi har state och tilldelar state i value properties i input fält 
      // kan vi ha en controlled element


      // controlled element: react apps component controllerar input fält 
          
         //  DOM Kontoller input element om vi inte sätter controlled element
         


    return(
        <form onSubmit={handleSubmit}>
            <input 
            placeholder="enter your name"
            name="name"
            value={formValue.name}
            onChange={handleOnChange} 
            />

            <input 
            placeholder="Enter email"
            name="email"
            value={formValue.email}
            onChange={handleOnChange}
            />
           
            <button>Send</button>
        </form>
    )
}

export default Form;


// upprepa form , multiple form data ändring med hjälp av en onchange

// React-router-dom