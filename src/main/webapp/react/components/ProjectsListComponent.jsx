import React from 'react';
import {useSelector} from "react-redux";
import ImageCardComponent from "./ImageCardComponent";
import _ from "lodash";

export default function(){
    const data = useSelector(v=>{
        const projects = v.data.pages.homePage.projects;
        const languages = projects.languages;
        const activeLanguage = projects.activeLanguage;
        const page = projects.page;

        const data = _.chunk(projects.projectsList.filter(v=>languages[Number(v.lang)]===activeLanguage),3);

        if(data.length>=page){
            return data[page-1];
        }else{
            return [];
        }
    })
    return (
        <div className={"projects__list center"}>
                {
                    data.map(v=>{
                        return (
                            <div className={"projects__list-item"} key={v+Math.random()}>
                               <ImageCardComponent  {...v}/>
                            </div>
                        )
                    })
                }
        </div>
    );
}