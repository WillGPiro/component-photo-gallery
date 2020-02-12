import HornedItem from './HornedItem';
import React, { Component } from "react";
import images from './data';

export default class HornedList extends Component {
    //this is where we set state. State is a magic funciton of React.
    state = {selected: null};
    
    render() {
        
        const { selected } = this.state;
        const cardImg = images.filter(card => {
        if (!selected) return true

        return card.keyword === selected;
        })

        const mappedCards = cardImg.map(card => 
        <HornedItem horny = {card}/>)
        
        const handleChange = (e) => {
            this.setState({ selected: e.target.value });
        }
        
    
    return (
        <main>
            <section className="options">
                <select className="filter" onChange = {handleChange}>
                <option value="" defaultValue>All Horned Items</option>
                <option value='narwhal'>Narwhal</option>
                <option value='rhino'>Rhino</option>
                <option value='unicorn'>Unicorn</option>
                <option value='unilego'>Unilego</option>
                <option value='triceratops'>Triceratops</option>
                <option value='markhor'>Markhor</option>
                <option value='mouflon'>mouflon</option>
                <option value='addax'>Addax</option>
                <option value='chameleon'>Chameleon</option>
                <option value='lizard'>Lizard</option>
                <option value='dragon'>Dragon</option>
                </select>
            </section>
            <ul className="horned-item">
                {mappedCards}
             </ul>
        </main>
        );
    }   
}





    
