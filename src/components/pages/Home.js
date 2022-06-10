import React, { useState, useEffect } from "react";
import "../../App.css";
import Hero from "../Hero";
import NowShowing from "../NowShowing";
import SearchBar from "../SearchBar";
import apiConfig from "../../api/apiConfig";

function Home() {
  const [tvs, setTvs] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${apiConfig.movie.NOW_SHOWING_URL}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setMovies(data.results);
        } else {
          setMovies([]);
        }
      });
  }, [movies]);

  useEffect(() => {
    fetch(`${apiConfig.tv.NOW_SHOWING_URL}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setTvs(data.results);
        } else {
          setTvs([]);
        }
      });
  }, [movies]);

  return (
    <>
      <Hero tvs={tvs} movies={movies} />
      <SearchBar />
      <NowShowing tvs={tvs} movies={movies} />
    </>
  );
}

export default Home;
