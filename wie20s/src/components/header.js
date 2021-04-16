import React from "react";

import {Route, BrowserRouter as Router, Switch} from "react-router-dom";


import Menu, {Menu2 } from "./menu";


import Card from "./card";
import Form from "./form"

function Header() {

    return(
        <>
       
      
        <Router>
            
              <Menu />
             
             <Route path="/"  exact component={Card} />
             <Route path="/home"  component={Menu}/>
             <Route path="/form"  component={Form}/>
          
        </Router>


       
        </>
    )
}


// 5 min

export default Header;