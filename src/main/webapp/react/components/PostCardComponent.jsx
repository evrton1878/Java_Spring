import React from 'react';
import ButtonComponent from "./ButtonComponent";
import CardComponent from "./CardComponent";
import {CircularProgress} from "@material-ui/core";
import {Rating} from "@material-ui/lab";


export default function({title,description,image,id,category}) {
    const [loading,updateState] = React.useState(true);

    return (
        <div className={"posts__item-area w-100"}>
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
                    <div className={"posts__item-content center position-relative"}>
                        <div className={"posts__item-title"}>
                            <h3>{title}</h3>
                        </div>
                        <div className={"posts__item-txt"}>
                            <h5>{description}</h5>
                        </div>
                        <div className={"posts__item-btn"}>
                            <ButtonComponent title={"Read more"}/>
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