import React from "react";
import {Link} from "react-router-dom";

// props  == {ex}   /props.ex / var {ex}= props
function Menu1({ex}) {
    return (
        <>
         <nav>
             {/* comments:-    props.ex  = ex  */}
             {ex}
             <Link to="/">Card</Link>
             <Link to="/home">Menu</Link>
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


