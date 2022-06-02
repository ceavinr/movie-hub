import React from "react";
import "./GenreBox.css";

const GenreBox = ({ className, onClick, genre }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      value={genre.id}
    >
      {genre.name}
    </button>
  );
};

export default GenreBox;
