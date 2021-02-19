import React from 'react';
import ContactForm from "./ContactForm";

export default function(){
    return (
        <div className={"contacts w-100"}>
            <div className={"contacts__wrap"}>
                <div className={"contacts__content w-100"}>
                    <ContactForm/>
                </div>
            </div>
        </div>
    )
}