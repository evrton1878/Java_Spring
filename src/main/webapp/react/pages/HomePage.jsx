import React from 'react';
import BannerComponent from "../components/BannerComponent";
import BasicLayout from "../layouts/BasicLayout";
import CardComponent from "../components/CardComponent";
import AboutMeComponent from "../components/AboutMeComponent";

export default function HomePage(){
    return (
        <React.Fragment>
            <BannerComponent/>
            <BasicLayout title={"About me"}>
               <CardComponent >
                   <AboutMeComponent/>
               </CardComponent>
            </BasicLayout>

            <BasicLayout title={"Skills"}>
            </BasicLayout>

            <BasicLayout title={"Projects"}>
            </BasicLayout>

            <BasicLayout title={"Questions"}>
            </BasicLayout>
        </React.Fragment>
    );
}