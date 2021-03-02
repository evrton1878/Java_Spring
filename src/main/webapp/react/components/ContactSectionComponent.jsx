import React from 'react';
import ContactForm from "./ContactForm";


export default class extends React.PureComponent{
    render() {
        return (
            <div className={"contacts w-100 position-relative"}>
                <div className={"contacts__wrap"}>
                    <div className={"contacts__content w-100 center"}>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        )
    }
}