import React, {useState, useEffect} from 'react';
import axios from "axios";
import Card from "./Card"



function CardList() {

    // useState for products 
    const [products, setProducts] = useState([]);
    const [loadPage, setLoadPage]= useState(2)


     // useEffect för att kunna hämta data från database 
    useEffect(()=>{ 
        console.log("from useEffect" , loadPage)
        const fecthProducts= async()=>{
        // query params/query string? 
        // vi vill inte läsa allt från databasen på en gång
        //   http://localhost:1337/products?_limit=
           const response =   await axios.get(`http://localhost:1337/products?_limit=${loadPage}`)
           console.log(response)
           setProducts(response.data)
        }
        fecthProducts()

    }, [loadPage])

   
     // skriva load more function 
     function loadMore() {

        // kolla hur många produkter finns i database 
        
         let dynamicPage = loadPage + 2 ;
         console.log("load more", loadPage)
         setLoadPage(dynamicPage)
         console.log(loadPage)
     }


    // skriva visa färre function


    return (
        <div>
            
             {products.map((product)=>{
                 return (
                     <Card key={product.id} image={product.img}  productName={product.name}  price={product.price} description= {product.description} />
                 )
             }) }
               
               <button onClick={loadMore}>Load more</button>
        </div>
    )
}

export default CardList

// rfce
// 11.00


