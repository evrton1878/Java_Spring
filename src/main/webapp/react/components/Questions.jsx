import React from 'react';
import {useSelector} from "react-redux";
import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@material-ui/core";


class ExpandMoreIcon extends React.Component {
    render() {
        return null;
    }
}

export default function(){
    const questions = useSelector(state=>state.data.pages.homePage.questions.questionsList);

    return (
        <div className={"questions"}>
           <div className={"questions__wrap"}>
               <div className={"question__content"}>
                   {
                       questions.map(v=>(
                           <Accordion key={v+Math.random()}>
                               <AccordionSummary
                                   expandIcon={<ExpandMoreIcon />}
                                   aria-controls="panel1a-content"
                               >
                                   <Typography>
                                       {v.question}
                                   </Typography>
                               </AccordionSummary>
                               <AccordionDetails>
                                   <Typography>
                                       {v.answer}
                                   </Typography>
                               </AccordionDetails>
                           </Accordion>
                       ))
                   }
               </div>
           </div>
        </div>
    )
}
