import React from 'react';
import ButtonComponent from "./ButtonComponent";
import CardComponent from "./CardComponent";
import {Avatar, Chip, CircularProgress} from "@material-ui/core";
import DoneIcon from '@material-ui/icons/Done';
import {Rating} from "@material-ui/lab";


export default function({title,description,image,id,category, href}) {
    const [loading,updateState] = React.useState(true);

    return (
        <div className={"posts__item-area w-100"}>
            <CardComponent class={"posts__item-card"} padding={"0"}>
                <>
                    <div className={"posts__item-image position-relative"}>
                        <img src={image} alt={"..."} onLoad={()=>updateState(false)} style={{opacity:loading ? '0':'1'}}/>
                        {
                            loading
                            && (
                                <div className={"posts__item-loading center"}>
                                    <CircularProgress color={"primary"}/>
                                </div>
                            )
                        }
                    </div>
                    <div className={"posts__item-content center position-relative"}>
                        <div className={"posts__item-title"}>
                            <h3>{title}</h3>
                        </div>
                        <div className={"posts__item-category"}>
                            <Chip
                                avatar={<Avatar>{category.charAt(0)}</Avatar>}
                                label={category}
                                clickable
                                color="primary"
                                deleteIcon={<DoneIcon />}
                            />
                            <Chip
                                avatar={<Avatar>P</Avatar>}
                                label={"programming"}
                                clickable
                                color="primary"
                                deleteIcon={<DoneIcon />}
                            />
                        </div>
                        <div className={"posts__item-txt"}>
                            <h5>{description}</h5>
                        </div>
                        <div className={"posts__item-btn"}>
                            <ButtonComponent title={"Read more"} href={href}/>
                        </div>
                        <div className={"posts__stars"}>
                            <Rating name="read-only" value={5} readOnly />
                        </div>
                    </div>
                </>
            </CardComponent>
        </div>
    );
}