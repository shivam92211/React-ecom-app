import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import React from 'react'
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";


const AboutContent = () => {
  return (
      <div className="about">
          <div className="left">
              <h1>All About MiniFit</h1>
              
              <h4>Welcome to MiniFit!</h4>
                <p> At MiniFit Paralleletes, we are dedicated to delivering high-quality paralleletes
                  for a wide range of applications. With our state-of-the-art manufacturing facility
                  and a team of skilled professionals, we provide reliable and precise solutions for
                  your parallel motion needs.</p> 

            <h4>Our Commitment to Quality</h4>
                 <p> We understand that precision and reliability are crucial when it comes to paralleletes.
                  That's why we prioritize quality in every aspect of our manufacturing process.
                  From the selection of premium materials to the rigorous quality control checks,
                      we ensure that our paralleletes meet the highest standards.</p>
                  
            <h4>Customized Solutions</h4>
                 <p> We recognize that each customer has unique requirements. That's why we offer customized
                  solutions to meet your specific needs. Whether you need paralleletes for industrial machinery,
                  automotive applications, or any other industry, our team of experts will work closely with
                  you to design and manufacture paralleletes that perfectly match your specifications.</p>

            <h4>Advanced Manufacturing Technology</h4>
              <p>At MiniFit Paralleletes, we leverage the latest manufacturing technologies and equipment
                  to ensure superior quality and precision. Our cutting-edge machinery, combined with our
                  skilled workforce, allows us to produce paralleletes with exceptional accuracy and
                  durability.</p>
              
              <h4>Reliable and Timely Delivery</h4>
              <p>We understand the importance of timely delivery to keep your projects on schedule.
                  With our efficient production processes and streamlined logistics,
                  we are committed to delivering your orders promptly, without compromising on quality.</p>

              <h4>Customer Satisfaction</h4>
              <p>Our customers are at the heart of everything we do. We strive to exceed their expectations
                  by providing outstanding customer service and support. From the initial consultation to
                  post-purchase assistance, we are dedicated to ensuring your satisfaction with our
                  products and services.</p>
              
              <Link to="/contact">
                  <button className="btn">Contact</button>
              </Link>
          </div>

          <div className="right">
              <div className="img-container">
                  <div className="img-stack top">
                      <img src={img4} className="img" alt="Parallettes" />
                  </div>
                  <div className="img-stack bottom">
                      <img src={img5} className="img" alt="Parallettes" />
                  </div>
              </div>
          </div>
    </div>
  )
}

export default AboutContent