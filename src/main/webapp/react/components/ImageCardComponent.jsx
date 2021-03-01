import React from 'react';
import CardComponent from "./CardComponent";
import ButtonComponent from "./ButtonComponent";

export default function({image="",title="",description="",id=1}){
    return (
        <CardComponent class={"projects__list-card"} padding={"0"}>
             <>
                 <div className={"projects__list-img"}>
                     <img src={image} alt={"..."}/>
                 </div>
                <div className={"projects__list-content center"}>
                    <div className={"projects__list-title"}>
                        <h4 className={"h4"}>{title}</h4>
                    </div>
                    <div className={"projects__list-txt"}>
                        <h5>{description}</h5>
                    </div>
                    <div className={"projects__list-btn"}>
                        <ButtonComponent title={"Read more"} href={"/project/"+id}/>
                    </div>
                </div>
             </>
        </CardComponent>
    )
}