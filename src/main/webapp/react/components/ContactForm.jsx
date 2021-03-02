import React from 'react';
import CardComponent from "./CardComponent";
import ButtonComponent from "./ButtonComponent";
import NeoButton from "./NeoButton";
import {Alert, AlertTitle} from "@material-ui/lab";
import {Snackbar} from "@material-ui/core";

const FormErrors = ({errors})=>{
    if(errors.length){
        return (
            <div className={"form__errors w-100"}>
                {
                    errors.map(({severity="info",message=""})=>{
                        return (
                            <Alert severity={severity} key={Math.random()}>
                                <AlertTitle>{severity}</AlertTitle>
                                {message}
                            </Alert>);
                    })
                }
            </div>
        )
    }
    return null;
}


function ContactForm(){
    const [errors , updateErrors] = React.useState([]);
    const [submitError, updateSubmitError] = React.useState("");

    const changeData = (event)=>{
       const target = event.target;
       const inputName = target.name;

       if(!target.checkValidity()){
           const obj = {severity:"",message:"",name:name};
           const val = target.validity;
           obj.severity = "error";
           console.log(val)

           for (const name in val) {
               const value = val[name];

               switch (name) {
                   case true:
                       if(!value && name!=="valid") break;
                   case "patternMismatch":
                       obj.message = `Field, named '${inputName}' must contain only letters and one whitespace `
                       break;
                   case "tooShort" || "tooLong":
                       const min = target.getAttribute("minLength");
                       const max = target.getAttribute("maxLength")
                       obj.message = `Field, named '${inputName}' must be more than ${min} characters and less than ${max} characters`;
                       break;
                   case "valueMissing":
                       obj.message = `Field, named '${inputName}' is required`;
                       break;
                   case "invalid":
                       obj.message = `Field, named '${inputName}' is invalid`;
                   default:
                       break;
               }
           }

           updateErrors((errors)=>{
               const data = [...errors.filter(v=>v.name !== name)];
               data.push(obj)
               return data
           });
       }
    }

    const submit = (event)=>{
        event.preventDefault();
        event.stopPropagation();

        const form = document.querySelector("#contact_form");

        if(form.checkValidity()){

        }else{
            updateSubmitError("Invalid input");
        }
    }

    return (
       <React.Fragment>
           <Snackbar
               anchorOrigin={{
                   vertical: 'bottom',
                   horizontal: 'center',
               }}
               open={Boolean(submitError)}
               autoHideDuration={6000}
               onClose={()=>updateSubmitError("")}
               message={submitError}
               />
        <CardComponent padding={true} class={"form w-100 center"}>
            <div className={"center w-100"}>
                <div className={"form__area w-100"}>
                    <div className={"form__wrap"}>
                        <form className={"form__elem center"} onInput={changeData} onSubmit={submit} id={"contact_form"}>
                            <div className={"form__control w-100"}>
                                <input name={"email"} type={"email"} placeholder={"Email"} maxLength={"30"} minLength={"10"} required={true}/>
                            </div>

                            <div className={"form__control w-100"}>
                                <input name={"username"} pattern={"[a-zA-Z]+(\s?)"} type={"text"} placeholder={"Username"} required={true} maxLength={"30"} minLength={"10"}/>
                            </div>

                            <div className={"form__control w-100"}>
                                <textarea name={"message"} placeholder={"Message"} maxLength={300} minLength={30} required={true}></textarea>
                            </div>

                            <FormErrors errors={errors}/>

                            <div className={"form__btn center"}>
                                <ButtonComponent title={"Submit"}/>
                            </div>
                            <div className={"form__btn center"}>
                                <NeoButton title={"Reset"}/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </CardComponent>
       </React.Fragment>
    );
}

export default ContactForm