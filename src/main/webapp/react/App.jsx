import React from 'react';
import HeaderComponent from "./components/HeaderComponent";
import { BrowserRouter, Switch } from 'react-router-dom';
import {Route} from "react-router";
import HomePage from "./pages/HomePage";


export default function App(){
    return (
       <BrowserRouter>
            <HeaderComponent/>
            <Switch>
                <Route exact={"/"} component={HomePage}/>
            </Switch>
       </BrowserRouter>
    );
}