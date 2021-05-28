import React from 'react'



import dotenv from 'dotenv'

dotenv.config();


console.log(process.env.REACT_AUTHDOMAIN)
// process.env

function Child({children}) {
    
    return (
        <div>
             {children}
             this is the child element
           
        </div>
    )
}

export default Child
