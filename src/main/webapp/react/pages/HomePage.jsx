import React from 'react';
import BannerComponent from "../components/BannerComponent";
import BasicLayout from "../layouts/BasicLayout";
import CardComponent from "../components/CardComponent";
import AboutMeComponent from "../components/AboutMeComponent";
import SkillsComponent from "../components/SkillsComponent";
import {useSelector} from "react-redux";

export default function HomePage(){
    const skillsData = useSelector(state=>state.data.pages.homePage.skills);

    return (
        <React.Fragment>
            <BannerComponent/>
            <BasicLayout title={"About me"}>
               <CardComponent >
                   <AboutMeComponent/>
               </CardComponent>
            </BasicLayout>

            <BasicLayout title={"Skills"} description={skillsData.skillsDescription}>
                <SkillsComponent/>
            </BasicLayout>

            <BasicLayout title={"Projects"}>
            </BasicLayout>

            <BasicLayout title={"Questions"}>
            </BasicLayout>

            <BasicLayout title={"Contact me"}>

            </BasicLayout>
        </React.Fragment>
    );
}