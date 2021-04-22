import React from 'react';




function card( {productName, price}   ) {
    return (
        <div className="relative bg-white">
            
        ====================    
           <div>  Name: {productName}   </div> 
            <div>  Price:  {price} </div>
        ====================
        </div>
    )
}

export default card
