import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import Watchlist from "../components/pages/Watchlist";
import Movies from "../components/pages/Movies";
import Catalog from "../components/pages/Catalog";
import NowShowing from "../components/pages/NowShowing";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/watchlist" element={<Watchlist />} />
      <Route path="/now-showing" element={<NowShowing />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:id" element={<Catalog />} />
    </Routes>
  );
};

export default RoutesConfig;
