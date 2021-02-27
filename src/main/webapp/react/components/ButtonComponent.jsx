import React from 'react';
import {Link} from 'react-router-dom';
    
export default function({title="",children,href=""}){
    let comp;

    if(title.length && !href.length){
        comp = <span className={"h4"}>{title}</span>;
    } else if(React.isValidElement(children)){
        comp = children;
    } else if(href.length){
        comp = <Link to={href}><span className={"h4"}>{title}</span></Link>;
    }

    return (
        <button className={"btn-orange center"}>
            {comp}
        </button>
    )
}

