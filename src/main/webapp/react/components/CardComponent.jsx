import React from 'react';

export default class extends React.PureComponent{
    render(){
        return (
            <div className={"card " + (this.props.class||'')} style={{padding: this.props.padding?"3rem":0}}>
                <div className={"card__wrap w-100"}>
                    <div className={"card__content"}>
                          <div className={"card__items"}>
                              {this.props.children}
                          </div>
                    </div>
                </div>
            </div>
        )
    }
}