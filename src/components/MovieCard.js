import React, { useState } from "react";
import "./MovieCard.css";
import { MovieControls } from "./MovieControls";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

function getColor(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "yellow";
  } else {
    return "red";
  }
}

function Movie({ movie, card_type, collection }) {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

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
                <p className="card-overview">{movie.overview}</p>
              ) : (
                <p className="warning">
                  We still don't have an overview translated in English.
                </p>
              )}
              <br />
              {card_type === "watchlist-tv" ||
              card_type === "watchlist-movie" ? (
                <MovieControls
                  onClick={toggleModal}
                  type={card_type + "-card"}
                  movie={movie}
                />
              ) : (
                <MovieControls
                  onClick={toggleModal}
                  type={card_type + collection + "-card"}
                  movie={movie}
                />
              )}
            </div>
          </div>
        </div>
      )}

      <div className="movie-list">
        <MovieControls type={card_type} movie={movie} />
        {collection === "collection" ? (
          <div
            className="movie-list-content"
            onClick={() => navigate("/movie/" + movie.id)}
          >
            {movie.title ? (
              <img
                className="movie-list-img"
                src={
                  movie.poster_path
                    ? IMG_URL + movie.poster_path
                    : "http://via.placeholder.com/1080x1580"
                }
                alt={movie.title}
              />
            ) : (
              <img
                className="movie-list-img"
                src={
                  movie.poster_path
                    ? IMG_URL + movie.poster_path
                    : "http://via.placeholder.com/1080x1580"
                }
                alt={movie.name}
              />
            )}
            <div className="movie-list-info">
              {movie.title ? (
                <h3 className="movie-list-title">{movie.title}</h3>
              ) : (
                <h3 className="movie-list-title">{movie.name}</h3>
              )}
              <span className={getColor(movie.vote_average)}>
                <i class="fas fa-star" /> {movie.vote_average.toFixed(1)}
              </span>
            </div>
          </div>
        ) : (
          <div className="movie-list-content" onClick={toggleModal}>
            {movie.title ? (
              <img
                className="movie-list-img"
                src={
                  movie.poster_path
                    ? IMG_URL + movie.poster_path
                    : "http://via.placeholder.com/1080x1580"
                }
                alt={movie.title}
              />
            ) : (
              <img
                className="movie-list-img"
                src={
                  movie.poster_path
                    ? IMG_URL + movie.poster_path
                    : "http://via.placeholder.com/1080x1580"
                }
                alt={movie.name}
              />
            )}
            <div className="movie-list-info">
              {movie.title ? (
                <h3 className="movie-list-title">{movie.title}</h3>
              ) : (
                <h3 className="movie-list-title">{movie.name}</h3>
              )}
              <span className={getColor(movie.vote_average)}>
                <i class="fas fa-star" /> {movie.vote_average.toFixed(1)}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Movie;
