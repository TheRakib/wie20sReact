import React from "react";
import Card from "./Card";
import Form from "./Form";

import {Route, BrowserRouter as Router} from "react-router-dom"
// react-router-dom ?? 

// yarn add react-router-dom

export default function AppRoute(){

    return(

        <>

        <Router>  
           
           <Route path="/" exact component={Card} />
           <Route path="/form" component={Form} />

        </Router>
           
           
           
        </>
    )
}
