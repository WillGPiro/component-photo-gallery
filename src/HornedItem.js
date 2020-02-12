import React,  { Component } from "react"

export default class HornedItem extends Component {
    render() {
        const horny = this.props.horny
        return (
            <section clasName ="horned-item">
                <div className = "horned-image-title">
                    <img src={horny.url} alt={horny.title}></img>
                    <title>{horny.title}</title>
                </div>
                
                <div className ="horned-description">
                    <p>{horny.description}</p>
                    <p>{horny.keyword}</p>
                    <p>{horny.horns}</p>
                </div>
            </section>
           

        )
    }

}   