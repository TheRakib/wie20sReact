import React from "react";
import CardList from "./CardList";
import Form from "./Form";
import Menu from "./Menu";
import Registration from "./Registration";
import Login from "./Login";

import AddToCard from "./AddToCard";
import ForgotPassword from "./Forgot-password";
import ResetPassword from "./Reset-Password"
import Parent from "./Parent"
import API from "./API"
import MinaBookingar from "./MinaBookningar"
//import Upload from "./UploadFile";


import {Route, BrowserRouter as Router, Switch} from "react-router-dom"
// react-router-dom ?? 

// yarn add react-router-dom

export default function AppRoute(){

    return(

        <>
    
        

        <Router>  
              
           <Menu />
          <Switch>
           <Route path="/" exact component={CardList} />
           <Route path="/card" exact component={CardList} />
           <Route path="/login" component= {Login} />
           <Route path="/register" component={Registration} />
           <Route path="/form" component={AddToCard} />
           <Route path="/reset-password" component= {ResetPassword} />
           <Route path="/forgot-password" component= {ForgotPassword} />
           <Route path="/parent" component= {Parent} />
           <Route path="/bookningar" component={MinaBookingar} /> 
           <Route path="/API" component={API} /> 
           </Switch>
        </Router>
           
           
           
        </>
    )
}

// kl. 11.00