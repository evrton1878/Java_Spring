import React from 'react';
import HeaderComponent from "./components/HeaderComponent";
import { BrowserRouter, Switch } from 'react-router-dom';
import {Route} from "react-router";
import HomePage from "./pages/HomePage";
import {Provider} from "react-redux";
import {store} from "./store";
import FooterComponent from "./components/FooterComponent";

export default function App(){
    return (
       <BrowserRouter>
          <Provider store={store}>
              <HeaderComponent/>
              <Switch>
                  <Route path={"/"} component={HomePage} exact/>
              </Switch>
              <FooterComponent/>
          </Provider>
       </BrowserRouter>
    );
}