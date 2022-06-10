import React from "react";
import "./MovieCard.css";
import "./SearchCard.css";
import { useNavigate } from "react-router-dom";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

const SearchCard = ({ collection, type }) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="movie-list"
        onClick={() => navigate("/" + type + "/" + collection.id)}
      >
        <div className="movie-list-content">
          {type === "person" ? (
            <img
              className="movie-list-img"
              src={
                collection.profile_path
                  ? IMG_URL + collection.profile_path
                  : "http://via.placeholder.com/1080x1580"
              }
              alt={collection.name}
            />
          ) : (
            <img
              className="movie-list-img"
              src={
                collection.poster_path
                  ? IMG_URL + collection.poster_path
                  : "http://via.placeholder.com/1080x1580"
              }
              alt={collection.name}
            />
          )}

          <div className="movie-list-info">
            <h3 className="movie-list-title">{collection.name}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchCard;
