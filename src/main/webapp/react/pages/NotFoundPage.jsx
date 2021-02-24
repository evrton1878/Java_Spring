import React from 'react';
import Decoration from "../components/Decoration";
import BasicLayout from "../layouts/BasicLayout";

export default function(){
    return (
        <div className={"w-100 position-relative"}>
            <Decoration styles={{bottom:0, left: "5%"}}/>
            <BasicLayout title={"404"} description={"The page you are looking for is not found"}></BasicLayout>
            <Decoration styles={{top:0, right: "5%"}}/>
        </div>
    );
}