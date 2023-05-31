import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";
import React from 'react';

const Work = () => {
    return (
    <div className="work-container">
        <h1 className="project-heading">Our Products</h1>
        <div className="project-container">
            {WorkCardData.map((val, ind) => {
                return (
                    <WorkCard
                        key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        price={val.price}
                        sold={val.sold}
                        discount={val.discount}
                        mrp={val.mrp}
                        text={val.text}
                        text1={val.text1}
                        text2={val.text2}
                        text3={val.text3}
                        text4={val.text4}
                        text5={val.text5}
                        url={val.url}
                    />
                 ) 
           })}
        </div>
    </div>
    );
  
};

export default Work