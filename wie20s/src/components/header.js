import React from "react";
import {Route, BrowserRouter, Switch, Link} from "react-router-dom";
import Menu, {Menu2 } from "./menu";


import Card from "./card";
import Form from "./form"

function Header() {

    return(
        <>
       
        <BrowserRouter>

         <Link to="/">Card</Link>
         <Link to="/home">Menu</Link>
          
             <Route path="/"  exact component={Card} />
             <Route path="/home"  component={Menu}/>
             <Route path="/form"  component={Form}/>
          
        </BrowserRouter>


       
        </>
    )
}


// 5 min

export default Header;