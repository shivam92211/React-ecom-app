import "./FooterStyles.css";

import React from 'react';

import { FaHome, FaInstagram, FaMailBulk, FaPhone, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">

          <div className="f-location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Mumbai</p>
              <p>India</p>
            </div>
          </div>

          <div className="f-phone">
            <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />+91 81084 19746</h4>
          </div>

          <div className="f-email">
            <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />minifitproducts@gmail.com</h4>
          </div>

        </div>

        <div className="right">
          <h4>About the Company</h4>
          <p>At MiniFit, we are dedicated to delivering high-quality paralleletes for a
            wide range of applications.Choose MiniFit for precision, reliability, and
            exceptional quality in paralleletes manufacturing.</p>
          <div className="media">
            <NavLink to="https://youtube.com/@minifit.corporation"><FaYoutube size={35} style={{ color: "#fff", marginRight: "1rem" }} /></NavLink>
            <NavLink to="https://www.instagram.com/minifit.co"><FaInstagram size={35} style={{ color: "#fff", marginRight: "1rem" }} /></NavLink>
            <NavLink to="https://wa.me/c/918108419746"><FaWhatsapp size={35} style={{ color: "#fff", marginRight: "1rem" }} /></NavLink>
          </div>
        </div>

      </div>
      <p className="copy">&copy; {new Date().getFullYear()} MiniFit. All right reserved.</p>
    </div>
  ) 
}

export default Footer