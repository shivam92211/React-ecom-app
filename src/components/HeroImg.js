import "./HeroImgStyles.css";
import React from 'react';
import { Link } from "react-router-dom";
import milogo from "../assets/milogo.jpg";


const HeroImg = () => {
  return (
      <div className="hero">
          <div className="mask">
              
            <img className="into-image"
                  src={milogo} alt="Parattelles"/>
          </div>

          <div className="content">
              <p>Hello Everyone, Welcome</p>
              <h1>MiniFit</h1>
              <div className="butt">
                  <Link to="/product"
                  className="btn">Product</Link>
              
                  <Link to="/contact"
                  className="btn btn-light">Contact</Link>
              </div>
          </div>
    </div>
  )
}

export default HeroImg