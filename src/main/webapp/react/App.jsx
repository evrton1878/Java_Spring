import React from 'react';
import HeaderComponent from "./components/HeaderComponent";
import { BrowserRouter, Switch } from 'react-router-dom';
import {Route} from "react-router";
import HomePage from "./pages/HomePage";
import {Provider} from "react-redux";
import {store} from "./store";
import NotFoundPage from "./pages/NotFoundPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import FooterComponent from "./components/FooterComponent";
import PostPage from "./pages/PostPage/PostPage";


export default function App(){
    return (
       <BrowserRouter>
            <Provider store={store}>
                <HeaderComponent/>
                <Switch>
                    <Route exact={true} path={"/"} component={HomePage}/>
                    <Route exact={true} path={"/posts"} component={PostsPage}/>
                    <Route path={"/project/:id"} component={ProjectPage}/>
                    <Route path={"/post/:id"} component={PostPage}/>
                    <Route path={"/"} component={NotFoundPage}/>
                </Switch>
                <FooterComponent/>
            </Provider>
       </BrowserRouter>
    );
}