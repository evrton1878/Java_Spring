import React from 'react';
import {useSelector} from "react-redux";
import CardComponent from "./CardComponent";

export default function(){
    const items = useSelector(state=>state.data.pages.homePage.skills.skillsList);
    return (
        <div className={"skills"}>
            <div className={"skills__wrap center"}>
               <div className={"skills__list center"}>
                   {
                       items.map(v=>{
                           return (
                               <CardComponent padding={true} class={"skills__item"} key={v.title}>
                                   <div className={"skills__item-title"}>
                                       <h3>{v.title}</h3>
                                       <span>
                                           <svg width="34" height="5" viewBox="0 0 34 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                               <path d="M0.47226 2.13525H25.7756H33.8601" stroke="#414042" strokeWidth="4"/>
                                           </svg>
                                       </span>
                                   </div>
                                   <div className={"skills__item-description"}>
                                       <h5>{v.description}</h5>
                                   </div>
                                   <div className={"skills__item-img-container center"}>
                                       <img src={v.image} alt={v.title+" logo"} className={"skills__img"}/>
                                   </div>
                               </CardComponent>
                           )
                       })
                   }
               </div>
            </div>
        </div>
    )
}