import React from "react";


// Varifrån kom props ?
// varför lägger vi så {props.name}  {  }? 

// När vi lägger javascript i jsx lägger vi { }

// Varför använder vi props? 
function Card(props) {
    return(
        <>
         <div>Name: {props.name} </div>

        <div> Price: {props.price} </div>
       
        </>
    )
}

export default Card;
