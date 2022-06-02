import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import "./Hero.css";
import bg from "../assets/bg.jpg";

function Hero() {
  return (
    <div className="background">
      <img src={bg} alt="home" />
      <div className="main-container">
        <h1>MovieHub</h1>
        <div className="hero-btns">
          <div className="home-item">
            <Link to="/movie" className="home-links">
              Movies
            </Link>
          </div>
          <div className="home-item">
            <Link to="/tv" className="home-links">
              TV Series
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
