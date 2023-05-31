import "./WorkCardStyles.css"
import React from 'react';
import { NavLink } from "react-router-dom";

const WorkCard = (props) => {
    return (
    <div className="project-card">
            <img src={props.imgsrc} alt="Parallettes" />
            <div className="sell">
                <h2 className="project-title">{props.title}</h2>
                <p className="sold">({props.sold} sold)</p>
            </div>
            
            <div className="dis">
                <p className="pri"><span>&#8377;</span>{props.price}</p>
                <p className="discount">-{props.discount}%</p>
                <p className="mrp">M.R.P: <span>&#8377;</span>{props.mrp}</p>
            </div>
            
            
            <p className="dilev">(Free Delivery)</p>
            <div className="pro-detail">
                <h4>Features</h4>
                <p>{props.text1}</p>
                <p>{props.text2}</p>
                <p>{props.text3}</p>
                <p>{props.text4}</p>
                <p>{props.text5}</p>

            <div className="pro-btns">
                <NavLink to={props.url} className="btn">buy</NavLink>
            </div>
        </div>
    </div>
    );
  
};

export default WorkCard