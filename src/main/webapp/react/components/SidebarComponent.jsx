import React from 'react';
import {connect} from 'react-redux'
import CardComponent from "./CardComponent";
import {Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, makeStyles} from "@material-ui/core";
import ImageIcon from '@material-ui/icons/Image';
import {$media} from "../App";
import ExpensionComponent from "./ExpensionComponent/ExpensionComponent";
import {auditTime} from "rxjs/operators";


const mapStateToProps = ({data})=>({
    data: data.pages.postsPage.mostPopular
});

const SideBarContentComponent = ({data})=> (
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
);

function SidebarComponent({data}){
    const [isMedia, updateMedia] = React.useState(false);

    $media.pipe(auditTime(300)).subscribe(v=>{
        updateMedia(v);
    });

    const MediaSidebar = ()=>(
        <ExpensionComponent title={"Popular posts"}>
            <SideBarContentComponent data={data}/>
        </ExpensionComponent>
    );

    const NotMediaSidebar = ()=>(
            <CardComponent padding={true} class={"sidebar__content w-100"}>
                <div className={"text-center h3"}>Popular posts</div>
                <SideBarContentComponent data={data}/>
            </CardComponent>
    );

    return (
        <div className={"w-100 sidebar"}>
            {isMedia ? <MediaSidebar/> : <NotMediaSidebar/>}
        </div>);
}

export default connect(mapStateToProps)(SidebarComponent)