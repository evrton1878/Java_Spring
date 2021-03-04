import React from 'react';
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
import HeaderMediaComponent from "./components/HeaderMediaComponent/HeaderMediaComponent";
import HeaderComponent from "./components/HeaderComponent";
import {Subject} from "rxjs";

export const $media =  new Subject();

export default function App(){
    const [media, updateMedia] = React.useState(false);

    const callback = React.useCallback(()=>{
          if(window.matchMedia("(max-width: 900px)").matches){
              updateMedia(true);
              $media.next(true);
          } else{
              updateMedia(false);
              $media.next(false);
          }
    },[]);

    React.useEffect(()=>{
        callback();
    },[]);

    window.addEventListener("resize",callback)

    return (
       <BrowserRouter>
            <Provider store={store}>
                    {media ? <HeaderMediaComponent/> : <HeaderComponent/>}
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