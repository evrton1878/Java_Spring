import React from 'react';
import "./ProjectPage.scss";
import {useSelector} from "react-redux";
import PostLayout from "../../layouts/PostLayout/PostLayout";
import {Avatar, Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    avatar: {
        color: '#fff',
        backgroundColor:"#FFD850"
    },
}));

export default function ProjectPage({match}){
    const data = [
        {title:"Home",href:"/"},
        {title:"Projects",href:"/projects"},
        {title:"Project",active:true},
    ];

    const project = useSelector(({data})=>data.pages.projectsPage.projectsList.find((v)=>{
        return v.id == match.params.id;
    }));

    const classes = useStyles();

    return (
        <div className={"w-100 projects"}>
            <PostLayout {...project} data={data}>
                <div className={"projects__languages w-100"}>
                    <div className={"text-center h3"}>Languages</div>
                    <div className={"projects__languages-items center w-100"}>
                        {
                            project.languages.map(v=>{
                            return (
                            <Button>
                                <div className={"projects__languages-item center"} key={Math.random()}>
                                    <Avatar variant="square" className={classes.avatar}>
                                        {v.charAt(0)}
                                    </Avatar>
                                    <div>
                                        {v}
                                    </div>
                                </div>
                            </Button>);
                            })
                        }
                    </div>
                </div>
                <div className={"projects__description"}>
                    <div className={"text-center h3"}>Description</div>
                </div>
            </PostLayout>
        </div>
    );
}