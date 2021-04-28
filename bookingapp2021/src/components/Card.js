import React from 'react';




function card( {productName, price, description}   ) {
    return (
        <div className="relative bg-white">
            
           
           <div>  Name: {productName}   </div> 
            <div>  Price:  {price} </div>
              <div> details : {description}</div>
        </div>
    )
}

export default card
