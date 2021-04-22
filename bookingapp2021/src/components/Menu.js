import React from 'react';
import {Link } from "react-router-dom";

import ClassComponent from "./ClassComponent"
function Menu() {
    return (
        <>
        <ClassComponent />
       
        <nav>
           <Link to="/">CardList</Link>
           <Link to="/form"> Lägg till  </Link>
           
        </nav>
       
        </>
    )
}

export default Menu
