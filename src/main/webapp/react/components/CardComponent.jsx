import React from 'react';

export default class extends React.PureComponent{
    render(){
        return (
            <div className={"card"}>
                <div className={"card__wrap"}>
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