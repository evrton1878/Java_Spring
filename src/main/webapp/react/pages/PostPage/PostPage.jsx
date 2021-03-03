import React from 'react';
import {useSelector} from "react-redux";
import {useHistory} from "react-router";
import PostLayout from "../../layouts/PostLayout/PostLayout";
import {Avatar, Button} from "@material-ui/core";
import ImageButton from "../../components/ImageButton";

export default function({match}){
    const data = [
        {title:"Home",href:"/"},
        {title:"Posts",href:"/post"},
        {title:"Post",active:true},
    ];

    const project = useSelector(({data})=>data.pages.postsPage.filteredPosts.find((v)=>{
        return v.id == match.params.id;
    }));

    const history = useHistory();

    return (
        <div className={"w-100 project"}>
            <PostLayout {...project} data={data}>

            </PostLayout>
        </div>
    );
}