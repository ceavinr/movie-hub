import React, { useState } from "react";
import "./MovieCard.css";
import { MovieControls } from "./MovieControls";
import Moment from "react-moment";
import "./SearchCard.css";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

const SearchCard = ({ genres, movie, card_type }) => {
  const [modal, setModal] = useState(false);

  function result(array) {
    return array.map(function (id) {
      return genres.filter((el) => el.id === id)[0].name;
    });
  }
  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <button className="ctrl-btn" onClick={toggleModal}>
              <i className="fa-fw fa fa-times"></i>
            </button>
            <div className="modal-desc">
              <h2>
                {movie.title ? (
                  <>
                    {movie.title} (
                    <Moment format="YYYY">{movie.release_date}</Moment>)
                  </>
                ) : (
                  <>
                    {movie.name} (
                    <Moment format="YYYY">{movie.first_air_date}</Moment>)
                  </>
                )}
              </h2>
              <p>{movie.vote_average.toFixed(1)}/10</p>
              <br />
              {movie.title ? (
                <img
                  class="modal-backdrop-img"
                  src={
                    movie.backdrop_path
                      ? IMG_URL + movie.backdrop_path
                      : "https://via.placeholder.com/500x281"
                  }
                  alt={movie.title}
                />
              ) : (
                <img
                  class="modal-backdrop-img"
                  src={
                    movie.backdrop_path
                      ? IMG_URL + movie.backdrop_path
                      : "https://via.placeholder.com/500x281"
                  }
                  alt={movie.name}
                />
              )}
              {movie.overview ? (
                <p>{movie.overview}</p>
              ) : (
                <p className="warning">
                  We still don't have an overview translated in English.
                </p>
              )}
              <br />
              <MovieControls
                onClick={toggleModal}
                type={card_type}
                movie={movie}
              />
            </div>
          </div>
        </div>
      )}

      <div className="search-result" tabindex="0" onClick={toggleModal}>
        {movie.title ? (
          <img
            class="search-list-img"
            src={
              movie.backdrop_path
                ? IMG_URL + movie.backdrop_path
                : "https://via.placeholder.com/200x112"
            }
            alt={movie.title}
            width="200"
          />
        ) : (
          <img
            class="search-list-img"
            src={
              movie.backdrop_path
                ? IMG_URL + movie.backdrop_path
                : "https://via.placeholder.com/200x112"
            }
            alt={movie.name}
            width="200"
          />
        )}
        {movie.title ? (
          <img
            class="search-list-poster"
            src={
              movie.poster_path
                ? IMG_URL + movie.poster_path
                : "https://via.placeholder.com/200x300"
            }
            alt={movie.title}
            width="200"
          />
        ) : (
          <img
            class="search-list-poster"
            src={
              movie.poster_path
                ? IMG_URL + movie.poster_path
                : "https://via.placeholder.com/200x300"
            }
            alt={movie.name}
            width="200"
          />
        )}
        <div className="result-desc">
          {movie.title ? (
            <>
              <h3 className="result-title">{movie.title}</h3>
              <Moment format="YYYY" withTitle>
                {movie.release_date}
              </Moment>
            </>
          ) : (
            <>
              <h3 className="result-title">{movie.name}</h3>
              <Moment format="YYYY" withTitle>
                {movie.first_air_date}
              </Moment>
            </>
          )}

          {movie.genre_ids ? (
            <div className="result-genres">
              {result(movie.genre_ids).join(", ")}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
