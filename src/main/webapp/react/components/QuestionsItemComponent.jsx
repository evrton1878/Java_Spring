import React from 'react';


export default function({question,answer}){
    const [state,updateState] = React.useState(true);

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
                    <div className={"questions__item-rectangle center "} onClick={update}>
                        {(state)?
                            (
                                <svg width="16" height="16" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.3506 8H6.51947V14H4.90908V8H0.0779114V6H4.90908V0H6.51947V6H11.3506V8Z" fill="black"/>
                                </svg>
                            ):
                            (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-file-earmark-excel" viewBox="0 0 16 16">
                                    <path
                                        d="M5.884 6.68a.5.5 0 1 0-.768.64L7.349 10l-2.233 2.68a.5.5 0 0 0 .768.64L8 10.781l2.116 2.54a.5.5 0 0 0 .768-.641L8.651 10l2.233-2.68a.5.5 0 0 0-.768-.64L8 9.219l-2.116-2.54z"/>
                                    <path
                                        d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
                                </svg>
                            )}
                    </div>
                    <div className={"questions__item-txt"}>
                        <h5>{question}</h5>
                    </div>
                </div>
                <div className={"questions__item-line bg-gray "+(!state?"bg-dark":"")}></div>

                <div className={"questions__item-answer " + (!state?'activeItem':'')} hidden={state}>
                    <div >
                        <h5>{answer}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
