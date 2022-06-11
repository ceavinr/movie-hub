import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import Watchlist from "../components/pages/Watchlist";
import Movies from "../components/pages/Movies";
import TVs from "../components/pages/TVs";
import CollectionDetails from "../components/pages/CollectionDetails";
import Details from "../components/pages/Details";
import Genres from "../components/pages/Genres";
import Person from "../components/pages/Person";
import Search from "../components/pages/Search";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/watchlist" element={<Watchlist />} />
      <Route path="/movie" element={<Movies />} />
      <Route path="/tv" element={<TVs />} />
      <Route path="/search/:category" element={<Search />} />
      <Route path="/search/*" element={<Search />} />
      <Route path="/collection/:id" element={<CollectionDetails />} />
      <Route path="/:category/:id" element={<Details />} />
      <Route path="/:category/genres/:genre" element={<Genres />} />
      <Route path="/person/:id" element={<Person />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default RoutesConfig;
