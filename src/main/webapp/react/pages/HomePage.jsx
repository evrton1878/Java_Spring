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
import QuestionsComponent from '../components/Questions'


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

            <BasicLayout title={"Projects"} css_class={"projects"}>
                <React.Fragment>
                    <ProjectsSearchComponent/>
                    <ProjectsListComponent/>
                    <ProjectsPaginationComponent/>
                </React.Fragment>
            </BasicLayout>

            <BasicLayout title={"Questions"}>
                <QuestionsComponent/>
            </BasicLayout>

            <BasicLayout title={"Contact me"}>
                 <ContactSectionComponent/>
            </BasicLayout>
        </React.Fragment>
    );
}