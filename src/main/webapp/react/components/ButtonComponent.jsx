import React from 'react';
    
export default function({title="title"}){
    return (
        <button className={"btn-orange"}>
            <span>{title}</span>
        </button>
    )
}

