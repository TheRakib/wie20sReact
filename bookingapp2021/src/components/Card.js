import React from 'react';




function card({productName, price}) {
    return (
        <div className="relative bg-white">
            
        ====================    
           <div>  {productName}   </div> 
            <div>    {price} </div>
        ====================
        </div>
    )
}

export default card
