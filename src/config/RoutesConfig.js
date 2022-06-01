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
      <Route path="/:category/now-showing" element={<NowShowing />} />
      <Route path="/:category" element={<Movies />} />
      <Route path="/:category/:id" element={<Catalog />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default RoutesConfig;
