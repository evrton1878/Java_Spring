import React from 'react';
import "./ProjectPage.scss";
import {useSelector} from "react-redux";
import PostLayout from "../../layouts/PostLayout/PostLayout";
import {Avatar, Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import ImageButton from "../../components/ImageButton";
import {useHistory} from "react-router";

const useStyles = makeStyles((theme) => ({
    avatar: {
        color: '#fff',
        backgroundColor:"#FFD850",
        flex: "1 1 40px",
        width:"40px",
        minWidth:"40px"
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

    const history = useHistory();

    return (
        <div className={"w-100 project"}>
            <PostLayout {...project} data={data}>
                <div className={"project__description card"}>
                    <div className={"text-center h3"}>Description</div>
                    <div className={"project__description-txt"}>
                        <h5>{project.long_description}</h5>
                    </div>
                </div>
                <div className={"project__languages w-100 card"}>
                    <div className={"text-center h3"}>Languages</div>
                    <div className={"project__languages-items w-100"}>
                        {
                            project.languages.map(v=>{
                            return (
                            <Button className={"w-100"}>
                                <div className={"project__languages-item center w-100"} key={Math.random()+v}>
                                    <Avatar variant="square" className={classes.avatar}>
                                        {v.charAt(0)}
                                    </Avatar>
                                    <div className={"project__languages-txt h5"}>
                                        {v}
                                    </div>
                                </div>
                            </Button>);
                            })
                        }
                    </div>
                </div>
                <div className={"project__github w-100 card"}>
                     <ImageButton title={"View on github"} onClick={()=>window.open(project.link)} image={"/public/images/enterprise-city-w-logos.webp"}/>
                </div>
            </PostLayout>
        </div>
    );
}