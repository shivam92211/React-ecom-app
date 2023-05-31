import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Product from "./routes/Product";
import Blog from "./routes/Blog";
import About from "./routes/About";
import Contact from "./routes/Contact";
import { Route, Routes } from "react-router-dom";
import {Helmet} from "react-helmet";


function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MiniFit</title>
        <link rel="Minifit"  href="https://minifit.surge.sh" />
        <meta name="Parallettes" content="All about Parallettes" />
      </Helmet>
      


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/> } />
      </Routes> 

    </>
  );
}

export default App;
