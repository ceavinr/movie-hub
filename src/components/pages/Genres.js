import React, { useState, useEffect } from "react";

import "./Movies.css";
import Movie from "../MovieCard";
import apiConfig from "../../api/apiConfig";
import bg from "../../assets/bg.jpg";
import { useParams } from "react-router-dom";

function Genres() {
  const [results, setResults] = useState([]);
  const { category, genre } = useParams();
  const [genres, setGenres] = useState([]);

  const movies = [];

  // Genre list
  useEffect(() => {
    fetch(apiConfig[category].GENRE_URL)
      .then((res) => res.json())
      .then((genres_data) => {
        setGenres(genres_data.genres);
      });
  }, []);

  // Movie filtered by genre(s)
  useEffect(() => {
    fetch(
      `${apiConfig[category].DISCOVER_GENRE_URL}${genre}&api_key=9fee2dfca9fac3b1049c2bca2752291c`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          console.log(data.results);
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  }, [category, genre]);
  const genreObj = genres.find((e) => e.id === parseInt(genre));
  console.log(category);
  return (
    <>
      <div className="background">
        <img src={bg} alt="" />

        <div className="container">
          <div className="movie-page">
            {results.length > 0 ? (
              <>
                <div className="header">
                  <h2 className="heading">{genreObj.name}</h2>
                </div>

                <div className="movie-container">
                  {results.map((movie) => (
                    <Movie
                      card_type={"non-watchlist-" + category}
                      movie={movie}
                      key={movie.id}
                    />
                  ))}
                </div>
              </>
            ) : results.length === 0 ? (
              <>
                <div className="header">
                  <h2 className="heading">404 Not Found</h2>
                </div>
                <h2 className="no-results">404 Not Found</h2>
              </>
            ) : (
              <div className="movie-container">
                {movies.map((movie) => (
                  <Movie
                    movie={movie}
                    key={movie.id}
                    card_type={"non-watchlist-" + category}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Genres;
