import React from 'react';
import {Link} from 'react-router-dom';

export default function(){
    return (
     <header className={"header txt-light"}>
          <div className={"header__wrap"}>
              <div className={"header__content"}>
                  <div className={"header__brand-logo"}></div>
                  <div className={"header__links"}>
                      <ul>
                         <li className={"header__link"}>
                             <Link to={"/"}>Home</Link>
                         </li>
                          <li className={"header__link"}>
                              <Link to={"/"}>Contacts</Link>
                          </li>
                          <li className={"header__link"}>
                              <Link to={"/"}>Posts</Link>
                          </li>
                          <li className={"header__link"}>
                              <Link to={"/"}>Projects</Link>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
     </header>
    );
}