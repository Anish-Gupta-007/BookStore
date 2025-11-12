import React, { useEffect } from "react";
import "../css/Home.css";
import axios from "axios";
// import { set } from "mongoose";

const Home = ({ setRolee }) => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-text"> Book Shop</h1>
        <p className="hero-discription">
          Browse the collection of our best top interesting book. You definitely
          found what is your Looking for
        </p>
      </div>
      <div className="hero-image"> </div>
    </div>
  );
};

export default Home;
