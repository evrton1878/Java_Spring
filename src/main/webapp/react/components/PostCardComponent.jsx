import React from 'react';
import ButtonComponent from "./ButtonComponent";
import CardComponent from "./CardComponent";
import {CircularProgress} from "@material-ui/core";


export default function({title,description,image,id,category}) {
    const [loading,updateState] = React.useState(true);

    return (
        <CardComponent class={"posts__item-content"}>
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
                <div className={"posts__item-content center"}>
                    <div className={"posts__item-title"}>
                        <h3>{title}</h3>
                    </div>
                    <div className={"posts__item-txt"}>
                        <h5>{description}</h5>
                    </div>
                    <div className={"posts__item-btn"}>
                        <ButtonComponent title={"Read more"}/>
                    </div>
                </div>
            </>
        </CardComponent>
    );
}