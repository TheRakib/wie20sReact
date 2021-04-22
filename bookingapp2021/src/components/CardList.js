import React from 'react';
import Card from "./Card"


// ska komma från database eller apies 
const products = [
    {productName:"Headphone1" , price:"1800"} ,
    {productName:"Headphone2" , price:"2800"} ,
    {productName:"Headphone4" , price:"800"} 
]

// (product)=> {return (<Card />)}

function CardList() {
    return (
        <div>
            
             {products.map((product)=>{
                 return (
                     <Card key={product.price} productName={product.productName}  price={product.price} />
                 )
             }) }
               
        </div>
    )
}

export default CardList

// rfce
// 11.00


