import "./NavbarStyles.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import minilogo from "../assets/minilogo.png";


const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);  
    }
  };

  window.addEventListener("scroll", changeColor);



  return (
    <div className={color ? "header header-bg" : "header"}>
      <div className="n-container">
      <img className="n-logo" src={minilogo} alt="parallettes"/>
      <Link to="/"><h1 className="n-title">MiniFit.co</h1></Link>
      </div>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      
      <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{ color: "#fff" }} />) :
        (<FaBars size={20} style={{color:"#fff"}} />)}
      </div>
    </div>
  )
}

export default Navbar