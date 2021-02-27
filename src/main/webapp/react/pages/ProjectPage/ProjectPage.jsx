import React from 'react';
import "./ProjectPage.scss";
import {useSelector} from "react-redux";
import PostLayout from "../../layouts/PostLayout/PostLayout";


export default function ProjectPage({match}){
    const data = [
        {title:"Home",href:"/"},
        {title:"Projects",href:"/projects"},
        {title:"Project",active:true},
    ];

    const project = useSelector(({data})=>data.pages.homePage.projects.projectsList.find((v)=>{
        return v.id == match.params.id;
    }));

    return (
        <div className={"w-100 projects"}>
            <PostLayout {...project} data={data}>
                <div className={"projects__languages"}>
                    <div className={"text-center h3"}>Languages</div>
                </div>
                <div className={"projects__description"}>
                    <div className={"text-center h3"}>Description</div>
                </div>
            </PostLayout>
        </div>
    );
}