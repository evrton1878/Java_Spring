import React from 'react';
import { Field, reduxForm } from 'redux-form'
import CardComponent from "./CardComponent";
import ButtonComponent from "./ButtonComponent";


function ContactForm(props){
    const {handleSubmit, reset} = props;

    return (
        <div className={"form w-100 center"}>
            <div className={"form__area w-100"}>
                <div className={"form__wrap"}>
                    <form onSubmit={handleSubmit} className={"form__elem center"}>
                        <div className={"form__control w-100"}>
                            <Field name={"email"} type={"email"} component={"input"} placeholder={"Email"}/>
                        </div>

                        <div className={"form__control w-100"}>
                            <Field name={"username"} type={"text"} component={"input"} placeholder={"Username"}/>
                        </div>

                        <div className={"form__control w-100"}>
                            <Field name={"message"} component={"textarea"} placeholder={"Message"}/>
                        </div>

                        <div className={"form__btn center"}>
                            <ButtonComponent title={"Submit"}/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default reduxForm({form:"contacts"})(ContactForm)