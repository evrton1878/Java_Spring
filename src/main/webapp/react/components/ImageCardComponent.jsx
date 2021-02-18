import React from 'react';
import CardComponent from "./CardComponent";
import ButtonComponent from "./ButtonComponent";

export default function({image="",title=""}){
    return (
        <CardComponent class={"projects__list-card"}>
             <>
                 <div className={"projects__list-img"}>
                     <img src={image} alt={"..."}/>
                 </div>
                <div className={"projects__list-content center"}>
                    <div className={"projects__list-title"}>
                        <h5 className={"h4"}>{title}</h5>
                    </div>
                    <div className={"projects__list-btn"}>
                        <ButtonComponent title={"Read more"}/>
                    </div>
                </div>
             </>
        </CardComponent>
    )
}