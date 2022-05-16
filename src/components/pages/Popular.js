import React, { useState, useEffect } from "react";
import "../../App.css";
import Movie from "../MovieCard";
import Footer from "../Footer";
import { format } from "date-fns";

const current = new Date();
var datetime = format(current, "yyyy-MM-dd");
current.setDate(current.getDate() - 21);
var previousMonth = format(current, "yyyy-MM-dd");

const API_KEY = "api_key=9fee2dfca9fac3b1049c2bca2752291c";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL =
  BASE_URL +
  `/discover/movie?primary_release_date.gte=${previousMonth}&primary_release_date.lte=${datetime}&` +
  API_KEY;

function Popular() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        console.log(data);
        if (data.results.length !== 0) {
          setMovies(data.results);
        }
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="featured-page">
          <div className="header">
            <h1 className="heading">Now Showing</h1>
          </div>
          <div className="movie-container">
            {movies.length > 0 &&
              movies.map((movie) => (
                <Movie
                  movie={movie}
                  key={movie.id}
                  {...movie}
                  type="featured"
                />
              ))}
          </div>
        </div>
      </div>
      <div className="footer-container">
        <Footer />
      </div>
    </>
  );
}

export default Popular;
