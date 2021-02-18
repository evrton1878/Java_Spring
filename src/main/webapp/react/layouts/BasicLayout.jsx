import React from 'react';
import PropTypes from 'prop-types';

export default function BasicLayout({title, children=[],description="",css_class=""}){
    return (
        <section className={"section "+css_class}>
            <div className={"section__wrap"}>
                <div className={"section__content"}>
                     <div className={"section__title"}>
                         <span>{title}</span>
                         <div className={"section__line"}>
                             <svg width="322" height="11" viewBox="0 0 322 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M1 4L321 5" stroke="#E5E5E5" strokeWidth="4"/>
                                 <path d="M109 5.00482H160.502H212.005" stroke="#414042" strokeWidth="10"/>
                             </svg>
                         </div>
                     </div>
                    {
                        description.length ?
                            <div className={"section__description center w-100"}>
                                <h5>{description}</h5>
                            </div>
                            : null
                    }
                    <div className={"section__items wrap-md"}>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}

BasicLayout.propTypes = {
    title: PropTypes.string,
    children: PropTypes.element
}