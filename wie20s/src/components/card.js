import React, {useState} from "react";
// state:  hur vi kan passsera data inuti componentet

// event : onClick , onChange, onSubmit 

// hur vi använder state ? 
  //Steg 1: import { useState} from "react"
  //Steg 2: Ange namn och sätt ett default value const [counter, setCounter] = useState(0)
             // när du skriver ut value från state :counter
             // för att kunna sätta värdet : setCounter

// steg 3: sätter vi value till state : setCounter , onclick

// Steg 4: renderar/skriver man ut state: counter

//obs: När man ändrar state rerenderas hela component.
// Varifrån kom props ?
// varför lägger vi så {props.name}  {  }? 
// När vi lägger javascript i jsx lägger vi { }
// Varför använder vi props? 
function Card(props) {
    const [name, setName] = useState(" Hello ")
     //  ()=> { } arrow function 
    return(
        <>
         <div> <button onClick={ ()=> { setName("hej") } }>+</button>   </div>

         
         <button onClick={ ()=>{ setName("Hallå")}  }   > - </button>
         <div>{name}   </div> 
        
        <div> Price: {props.price} </div>
       
        </>
    )
}

export default Card;
