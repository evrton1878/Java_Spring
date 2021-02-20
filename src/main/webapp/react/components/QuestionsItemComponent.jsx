import React from 'react';
import _ from 'lodash';
import {from, interval} from "rxjs";
import {delay} from "rxjs/operators";


export default function({question,answer}){
    const [state,updateState] = React.useState(false);

    const update = ()=>{
        updateState((state)=>{
            const currentState = !state;
            return currentState;
        });
    }

    return (
        <div className={"questions__item"}>
            <div className={"questions__item-wrap"}>
                <div className={"questions__item-content  center"}>
                    <div className={"questions__item-rectangle center"} onClick={update}>
                        <svg width="14" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.3506 8H6.51947V14H4.90908V8H0.0779114V6H4.90908V0H6.51947V6H11.3506V8Z" fill="black"/>
                        </svg>
                    </div>
                    <div className={"questions__item-txt"}>
                        <h5>{question}</h5>
                    </div>
                </div>
                <div className={"questions__item-line bg-gray "+(state?"bg-dark":"")}></div>

                <div className={"questions__item-answer"}>
                    {state && <div >
                        <h5>{answer}</h5>
                    </div>}
                </div>
            </div>
        </div>
    )
}
