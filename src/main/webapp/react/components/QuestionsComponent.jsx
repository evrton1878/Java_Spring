import {useSelector} from "react-redux";
import React from "react";
import QuestionsItemComponent from "./QuestionsItemComponent";

export default function(){
    const questions = useSelector(state=>state.data.pages.homePage.questions.questionsList);

    return (
        <div className={"questions"}>
            <div className={"questions__wrap center"}>
                <div className={"questions__elem"}>
                    <div className={"questions__content"}>
                        {
                            questions.map(v=>(
                                <QuestionsItemComponent {...v} key={v.question+Math.random()}/>
                            ))
                        }
                    </div>
                </div>
                <div className={"questions__elem"}>
                    <div className={"questions__img-container"}>
                        <img src={"/public/images/notebook.svg"} alt={"..."}/>
                    </div>
                    <div className={"shadow"}> </div>
                </div>

                <div className={"questions__letters"} hidden>
                    QUESTIONS
                </div>
            </div>
        </div>
    )
}