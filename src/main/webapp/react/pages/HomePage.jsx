import React from 'react';
import BannerComponent from "../components/BannerComponent";
import BasicLayout from "../layouts/BasicLayout";
import CardComponent from "../components/CardComponent";
import AboutMeComponent from "../components/AboutMeComponent";
import SkillsComponent from "../components/SkillsComponent";
import {useSelector} from "react-redux";
import ProjectsSearchComponent from "../components/ProjectsSearchComponent";
import ProjectsListComponent from "../components/ProjectsListComponent";
import ProjectsPaginationComponent from "../components/ProjectsPaginationComponent";
import ContactSectionComponent from "../components/ContactSectionComponent";
import QuestionsComponent from '../components/QuestionsComponent'
import Decoration from "../components/Decoration";


export default function HomePage(){
    const skillsData = useSelector(state=>state.data.pages.homePage.skills);

    return (
        <React.Fragment>
            <BannerComponent/>
            <div className={'w-100 position-relative'}>
                <Decoration styles={{top:"1rem", left: "5%",transform:"rotate(199deg)"}}/>
                <BasicLayout title={"About me"}>
                    <CardComponent >
                        <AboutMeComponent/>
                    </CardComponent>
                </BasicLayout>
                <Decoration styles={{bottom:0, right: "5%"}}/>
            </div>

            <div className={'w-100 position-relative'}>
                <Decoration styles={{top:0, left: "5%"}}/>
                <BasicLayout title={"Skills"} description={skillsData.skillsDescription}>
                    <SkillsComponent/>
                </BasicLayout>
                <Decoration styles={{bottom:0, right: "5%"}}/>
            </div>

            <div className={'w-100 position-relative'}>
                <Decoration styles={{top:0, left: "5%"}}/>
                <BasicLayout title={"Projects"} css_class={"projects"}>
                   <React.Fragment>
                    <ProjectsSearchComponent/>
                    <ProjectsListComponent/>
                    <ProjectsPaginationComponent/>
                   </React.Fragment>
               </BasicLayout>
            </div>

            <div className={"w-100 position-relative"}>
                <Decoration styles={{bottom:0, left: "5%"}}/>
                <BasicLayout title={"Questions"}>
                    <QuestionsComponent/>
                </BasicLayout>
                <Decoration styles={{top:0, right: "5%"}}/>
            </div>

            <div className={"w-100 position-relative"}>
                <Decoration styles={{bottom:"5rem", left: "5%"}}/>
                <BasicLayout title={"Contact me"}>
                    <ContactSectionComponent/>
                </BasicLayout>
                <Decoration styles={{top:0, right: "5%"}}/>
            </div>
        </React.Fragment>
    );
}