import { Link } from "react-router-dom";
import "./PricingCardStyles.css";
import React from 'react';



const PricingCard = () => {
    return <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>-- Basic --</h3>
                <span className="bar"></span>
                <p className="btc">100</p>
                {/* <p>Durability</p> */}
                <Link to="/contact" className="btn">PURCHASE NOW</Link>
            </div>
        </div>
    </div>;
}

export default PricingCard