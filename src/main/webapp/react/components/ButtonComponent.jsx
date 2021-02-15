import React from 'react';
    
export default function({title="",children}){
    return (
        <button className={"btn-orange"}>
            {
                title.length ? (<span className={"h4"}>{title}</span>): children
            }
        </button>
    )
}

