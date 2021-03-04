import React from 'react';
import HeaderComponent from "../HeaderComponent";
import './HeaderMediaComponent.scss';
import MenuIcon from '@material-ui/icons/Menu';
import {IconButton} from "@material-ui/core";


export default function(){
    const click = React.useCallback(()=>{

    },[]);

    return (
        <div className={"header-media position-relative"}>
            <HeaderComponent links_classes={"none"}>
               <div className={"header__menu-icon"}>
                   <IconButton
                       color="inherit"
                       aria-label="open drawer"
                       onClick={click}
                   >
                       <MenuIcon />
                   </IconButton>
               </div>
            </HeaderComponent>
        </div>
    )
}