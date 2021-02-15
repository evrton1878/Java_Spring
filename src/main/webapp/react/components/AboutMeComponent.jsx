import React from 'react';
import ButtonComponent from "./ButtonComponent";

export default function(){
    return (
        <div className={"about"}>
             <div className={"about__wrap"}>
                 <div className={"about__content"}>
                     <div className={"about__line"}>
                         <img src={"/public/images/line.svg"} alt={"..."}/>
                     </div>
                     <div className={"about__items center"}>
                         <div className={"about__item"}>
                             <div className={"about__headline"}>
                                 <span className={"h3"}>Valeria Dorosh</span>
                                 <div className={"h5"}>Programmer / Designer</div>
                             </div>
                             <div className={"about__description h5"}>
                                 As a multi-paradigm language, JavaScript supports event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).
                             </div>
                             <div className={"about__btn"}>
                                 <ButtonComponent>
                                     <span className={"h5"}>
                                         View projects
                                     </span>
                                 </ButtonComponent>
                             </div>
                         </div>
                         <div className={"about__item"}>
                             <div className={"about__img-container"}>
                                   <img src={"/public/images/profile.svg"} alt={"..."}/>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
        </div>
    );
}