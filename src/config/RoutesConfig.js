import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import Watchlist from "../components/pages/Watchlist";
import Movies from "../components/pages/Movies";
import TVs from "../components/pages/TVs";
import Details from "../components/pages/Details";
import Genres from "../components/pages/Genres";
import NowShowing from "../components/pages/NowShowing";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/watchlist" element={<Watchlist />} />
      <Route path="/:category/now-showing" element={<NowShowing />} />
      <Route path="/movie" element={<Movies />} />
      <Route path="/tv" element={<TVs />} />
      <Route path="/:category/genres/:genre" element={<Genres />} />
      <Route path="/:category/:id" element={<Details />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default RoutesConfig;
