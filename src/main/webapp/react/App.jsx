import React from 'react';
import HeaderComponent from "./components/HeaderComponent";
import { BrowserRouter, Switch } from 'react-router-dom';
import {Route} from "react-router";
import HomePage from "./pages/HomePage";
import {Provider} from "react-redux";
import {store} from "./store";
import NotFoundPage from "./pages/NotFoundPage";
import PostsPage from "./pages/PostsPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";


export default function App(){
    return (
       <BrowserRouter>
            <Provider store={store}>
                <HeaderComponent/>
                <Switch>
                    <Route exact={true} path={"/"} component={HomePage}/>
                    <Route exact={true} path={"/posts"} component={PostsPage}/>
                    <Route path={"/project/:id"} component={ProjectPage}/>
                    <Route path={"/"} component={NotFoundPage}/>
                </Switch>
            </Provider>
       </BrowserRouter>
    );
}