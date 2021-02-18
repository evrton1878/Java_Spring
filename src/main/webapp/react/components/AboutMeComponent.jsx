import React from 'react';
import ButtonComponent from "./ButtonComponent";

export default function(){
    return (
        <div className={"about"}>
             <div className={"about__wrap"}>
                 <div className={"about__content"}>

                     <div className={"about__items center"}>
                         <div className={"about__item"}>
                             <div className={"about__line"} hidden>
                                 <img src={"/public/images/line.svg"} alt={"..."}/>
                             </div>
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
                         <div className={"about__item center"}>
                             <div className={"about__img-wrap"}>
                                 <div className={"about__img-container center"}>
                                     <img src={"/public/images/profile.png"} alt={"..."}/>
                                 </div>
                             </div>
                             <div className={"about__links center"}>
                                 <ul>
                                     <li className={"center"}>
                                         <div className={"center"}>
                                             <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                 <path fillRule="evenodd" clipRule="evenodd" d="M15 0C6.7125 0 0 6.88228 0 15.3794C0 22.1848 4.29375 27.9328 10.2562 29.9706C11.0062 30.1052 11.2875 29.6438 11.2875 29.2401C11.2875 28.8748 11.2688 27.6637 11.2688 26.3757C7.5 27.087 6.525 25.4337 6.225 24.5686C6.05625 24.1264 5.325 22.7615 4.6875 22.3963C4.1625 22.1079 3.4125 21.3966 4.66875 21.3774C5.85 21.3582 6.69375 22.4924 6.975 22.9538C8.325 25.2799 10.4813 24.6263 11.3438 24.2226C11.475 23.2229 11.8687 22.5501 12.3 22.1656C8.9625 21.7811 5.475 20.4546 5.475 14.572C5.475 12.8995 6.05625 11.5153 7.0125 10.4388C6.8625 10.0543 6.3375 8.4779 7.1625 6.36323C7.1625 6.36323 8.41875 5.95952 11.2875 7.93962C12.4875 7.59358 13.7625 7.42056 15.0375 7.42056C16.3125 7.42056 17.5875 7.59358 18.7875 7.93962C21.6563 5.9403 22.9125 6.36323 22.9125 6.36323C23.7375 8.4779 23.2125 10.0543 23.0625 10.4388C24.0188 11.5153 24.6 12.8803 24.6 14.572C24.6 20.4738 21.0938 21.7811 17.7563 22.1656C18.3 22.6462 18.7688 23.5689 18.7688 25.0108C18.7688 27.0678 18.75 28.721 18.75 29.2401C18.75 29.6438 19.0313 30.1244 19.7813 29.9706C22.759 28.9399 25.3466 26.9777 27.1797 24.3603C29.0128 21.7428 29.9992 18.6018 30 15.3794C30 6.88228 23.2875 0 15 0Z" fill="black"/>
                                             </svg>
                                         </div>
                                         <div className={"h5"}>Github</div>
                                     </li>

                                     <li className={"center"}>
                                         <div className={"center"}>
                                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                 <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="black"/>
                                             </svg>
                                         </div>
                                         <div className={"h5"}>Email</div>
                                     </li>

                                     <li className={"center"}>
                                         <div className={"center"}>
                                             <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                 <path d="M3.62 7.79C5.06 10.62 7.38 12.93 10.21 14.38L12.41 12.18C12.68 11.91 13.08 11.82 13.43 11.94C14.55 12.31 15.76 12.51 17 12.51C17.55 12.51 18 12.96 18 13.51V17C18 17.55 17.55 18 17 18C7.61 18 0 10.39 0 1C0 0.45 0.45 0 1 0H4.5C5.05 0 5.5 0.45 5.5 1C5.5 2.25 5.7 3.45 6.07 4.57C6.18 4.92 6.1 5.31 5.82 5.59L3.62 7.79Z" fill="black"/>
                                             </svg>
                                         </div>
                                         <div className={"h5"}>Phone</div>
                                     </li>
                                 </ul>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
        </div>
    );
}