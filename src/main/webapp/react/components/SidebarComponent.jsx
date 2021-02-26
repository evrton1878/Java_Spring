import React from 'react';
import {connect} from 'react-redux'
import CardComponent from "./CardComponent";
import {Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, makeStyles} from "@material-ui/core";
import ImageIcon from '@material-ui/icons/Image';


const mapStateToProps = ({data})=>({
    data: data.pages.postsPage.mostPopular
})

function SidebarComponent({data}){

    return (
         <div className={"sidebar w-100"}>
             <CardComponent padding={true} class={"sidebar__content w-100"}>
                 <div className={"text-center h3"}>Popular posts</div>
                 <div className={"sidebar__items"}>
                     <div className={"sidebar__item w-100"}>
                     {
                         data.map(v=>{
                             return (
                                 <Button key={v.title+Math.random()} className={"w-100"}>
                                     <div className={"sidebar__item-content center w-100"}>
                                         <div className={"sidebar__item-avatar"}>
                                             <Avatar>
                                                 <ImageIcon />
                                             </Avatar>
                                         </div>
                                         <div className={"sidebar__item-txt text-left"}>
                                             <p className={"h4"}>{v.title}</p>
                                             <p className={"h5"}>{v.category}</p>
                                         </div>
                                     </div>
                                 </Button>
                             )
                         })
                     }
                     </div>
                 </div>
             </CardComponent>
         </div>
    );
}

export default connect(mapStateToProps)(SidebarComponent)