import React from "react";
import Navbar from "../components/Navbar"
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import MovingImg from "../components2/MovingImg";



const Home = () => {
    return <div>
        <Navbar />
        <HeroImg />
        <MovingImg />
        <Footer/>
    </div>;
};

export default Home;