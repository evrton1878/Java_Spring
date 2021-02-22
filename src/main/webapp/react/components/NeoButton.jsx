import React from 'react';

export default function NeoButton({title="", onClick=()=>{}}){
    return (
        <button className={"btn-orange btn-neo center"} onClick={onClick}>
            <h4>{title}</h4>
        </button>
    )
}
