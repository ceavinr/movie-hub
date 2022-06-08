import React, { useState, useEffect } from "react";

import "./Movies.css";
import Movie from "../MovieCard";
import apiConfig from "../../api/apiConfig";
import { useParams } from "react-router-dom";
import bg from "../../assets/img-home.jpg";

const IMG_URL_ORIGINAL = "https://image.tmdb.org/t/p/original";

function Genres() {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(500);
  const { category, genre } = useParams();
  const [genres, setGenres] = useState([]);

  // Genre list
  useEffect(() => {
    fetch(apiConfig[category].GENRE_URL)
      .then((res) => res.json())
      .then((genres_data) => {
        setGenres(genres_data.genres);
      });
  }, [category]);

  // Movie filtered by genre(s)
  useEffect(() => {
    fetch(
      `${apiConfig[category].DISCOVER_GENRE_URL}${genre}&api_key=9fee2dfca9fac3b1049c2bca2752291c&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors && !isNaN(genre)) {
          setResults(data.results);
          if (data.total_pages > 500) {
            setMaxPage(500);
          } else if (data.total_pages === 0) {
            setMaxPage(1);
          } else {
            setMaxPage(data.total_pages);
          }
        } else {
          setResults([]);
          setMaxPage(500);
        }
      });
  }, [category, genre, page]);

  const genreObj = genres.find((e) => e.id === parseInt(genre));

  const onPreviousPage = () => {
    if (page === 1) {
      setPage(maxPage);
    } else setPage(page - 1);
  };

  const onNextPage = () => {
    if (page === maxPage) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  };

  return (
    <>
      <div className="background">
        {results[0] ? (
          <img
            className="background-genre-image"
            src={IMG_URL_ORIGINAL + results[0].backdrop_path}
            alt=""
          />
        ) : (
          <img src={bg} alt="" />
        )}
        <div className="container">
          <div className="movie-page">
            {results.length > 0 ? (
              <>
                <div className="header">
                  <h2 className="heading">{genreObj.name}</h2>
                </div>
                <div className="button-wrapper">
                  <button
                    className="left-arrow-button"
                    onClick={onPreviousPage}
                  >
                    <i class="fa-solid fa-arrow-left"></i>
                  </button>
                  <h2 className="page-fraction">
                    {"\u00A0"}Page {page}/{maxPage}
                    {"\u00A0"}
                    {"\u00A0"}
                  </h2>
                  <button className="right-arrow-button" onClick={onNextPage}>
                    <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
                <div className="movie-container">
                  {results.map((movie) => (
                    <Movie
                      card_type={"non-watchlist"}
                      movie={movie}
                      key={movie.id}
                      collection={"-" + category}
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
              <div className="movie-container"></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Genres;
