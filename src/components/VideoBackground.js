import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import "./VideoBackground.css";
import bg from "../img/img-home.jpg";

function VideoBackground() {
  return (
    <div className="main-container">
      <img src={bg} alt="home" center cover no-repeat />
      <h1>MovieHub</h1>
      <br />
      <div className="hero-btns">
        <div className="home-item">
          <Link to="/movie-website-react/now-showing" className="home-links">
            Now Showing
          </Link>
        </div>
        <div className="home-item">
          <Link to="/movie-website-react/watchlist" className="home-links">
            Watchlist
          </Link>
        </div>
      </div>
    </div>
  );
}

export default VideoBackground;
