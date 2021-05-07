import React from "react";
import CardList from "./CardList";
import Form from "./Form";
import Menu from "./Menu";
import Registration from "./Registration";
import Login from "./Login";

import AddToCard from "./AddToCard";

import {Route, BrowserRouter as Router, Switch} from "react-router-dom"
// react-router-dom ?? 

// yarn add react-router-dom

export default function AppRoute(){

    return(

        <>
    
        

        <Router>  
              
           <Menu />
          <Switch>
           <Route path="/card" exact component={CardList} />
           <Route path="/form" component={Form} />
           <Route path="/login" component= {Login} />
           <Route path="/register" component={Registration} />
           <Route path="/addproduct" component={AddToCard} />
           </Switch>
        </Router>
           
           
           
        </>
    )
}

// kl. 10.00