import React from "react";
import CardList from "./CardList";
import Form from "./Form";
import Menu from "./Menu"

import {Route, BrowserRouter as Router} from "react-router-dom"
// react-router-dom ?? 

// yarn add react-router-dom

export default function AppRoute(){

    return(

        <>

        <Router>  
              
          <Menu />

           <Route path="/" exact component={CardList} />
           <Route path="/form" component={Form} />

        </Router>
           
           
           
        </>
    )
}

// kl. 10.00