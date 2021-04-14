import React from "react";

function Menu1() {
    return (
        <>
         <nav>
             <a href="#">Hem </a>
             <a href="#">Tjänster</a>
             <a href="#">Kontakta oss</a>
             <a href="#">Om oss</a>
         </nav>
        </>   
    )
}

function Menu2() {

    return (
        <>
         <nav>
             <a href="#">Hem </a>
             <a href="#">Tjänster</a>
             <a href="#">Om oss</a>
         </nav>
        </>   
    )

}

//jsx: 
// fragement 
// html kod in i js 
// root element 

//export default  Menu; 
//export {Menu, Menu2}
export default Menu1;

export {Menu1, Menu2};


//props