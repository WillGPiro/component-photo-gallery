import HornedItem from './HornedItem';
import React, { Component } from "react";
import images from './data';

export default class HornedList extends Component {
    render() {

        return(
            <ul className="horned-item">
                {
                    images.map(card => {
                       return (
                           <HornedItem horny = {card}/>
                       )

                    })

                }
            </ul>
        
        );  

        }

}



    
