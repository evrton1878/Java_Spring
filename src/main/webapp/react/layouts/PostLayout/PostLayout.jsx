import React from 'react';
import './PostLayout.scss';
import BasicLayout from "../BasicLayout";
import {Breadcrumbs, Link, Typography} from "@material-ui/core";
import {useHistory} from 'react-router';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';



export default function({title, data=[], image,children=null}){
    const history = useHistory();

    const click = (event)=>{
        const link = event.target.getAttribute("href");
        history.push(link);
        event.preventDefault();
    };

    return (
        <div className={"post"}>
            <BasicLayout title={title} breadcrumbs = {data} showLetters={false}>
                <div className={"w-100"}>
                    <div className={"post__elem post__breadcrumbs"}>
                        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                            {
                                data.map(v=>{
                                    if(v.active){
                                        return (
                                            <Typography color="textPrimary" key={Math.random()}>
                                                {v.title.charAt(0).toUpperCase()+v.title.slice(1).toLowerCase()}
                                            </Typography>
                                        );
                                    } else{
                                        return (
                                            <Link color="inherit" href={v.href} onClick={click} key={Math.random()}>
                                                {v.title.charAt(0).toUpperCase()+v.title.slice(1).toLowerCase()}
                                            </Link>
                                        )
                                    }
                                })
                            }
                        </Breadcrumbs>
                    </div>
                    <div className={"post__elem post__image card"}>
                        <div className={"post__image-wrap"}>
                            <img src={image} alt={"..."}/>
                        </div>
                    </div>
                    <div className={"post__elem post__content"}>
                        {children}
                    </div>
                </div>
            </BasicLayout>
        </div>
    );
}