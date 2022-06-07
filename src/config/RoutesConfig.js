import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import Watchlist from "../components/pages/Watchlist";
import Movies from "../components/pages/Movies";
import TVs from "../components/pages/TVs";
import Collections from "../components/pages/Collections";
import CollectionDetails from "../components/pages/CollectionDetails";
import Details from "../components/pages/Details";
import Genres from "../components/pages/Genres";
import Person from "../components/pages/Person";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/watchlist" element={<Watchlist />} />
      <Route path="/movie" element={<Movies />} />
      <Route path="/tv" element={<TVs />} />
      <Route path="/collection" element={<Collections />} />
      <Route path="/collection/:id" element={<CollectionDetails />} />
      <Route path="/:category/:id" element={<Details />} />
      <Route path="/:category/genres/:genre" element={<Genres />} />
      <Route path="/people/:id" element={<Person />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default RoutesConfig;
