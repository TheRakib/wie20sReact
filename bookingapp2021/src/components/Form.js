import React, {useState} from 'react'


const isAdmin=true;

function Form() {


    const initialValues = {
        productName:" ",
        price: " "
    }
    const [formValues, setFormValues] = useState(initialValues)


    function onHandleSubmit() {
      // fixa detta 
    }
  

    function onHandleChange() {
        // fixa detta 
    }


    return (
        <>
            
      {isAdmin ?   
      (<form onSubmit={onHandleSubmit} >
            <label> ProductName:  </label> <input className="border" placeholder="Ange product name" value={formValues.productName} name="productName" onChange={onHandleChange} />
            <input className="border " placeholder="Ange price " type="number" name="price" value ={formValues.price} onChange={onHandleChange}/>
            <button className="bg-purple-600">Lägg till</button>
       </form>) 
         : 
         (<div>Du har inte behörighet att se detta sidan</div> )}  
        
        </>
    )
}

export default Form
