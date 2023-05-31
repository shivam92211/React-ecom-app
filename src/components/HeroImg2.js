import "./HeroImg2Styles.css"
import React, { Component } from 'react';
import img14 from "../assets/img14.jpg";


class HeroImg2 extends Component{
    render() {
    
        return (
            <div className="hero-img">
                <div className="mask1">
                    <img className="into-image1" src={img14} alt="Parallettes" />
                </div>
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default HeroImg2