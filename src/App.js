import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Popular from "./components/pages/Popular";
import Watchlist from "./components/pages/Watchlist";
import Movies from "./components/pages/Movies";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Navbar />
      <main>
        <Routes>
          <Route path="/movie-website-react/" element={<Home />} />
          <Route
            path="/movie-website-react/watchlist"
            element={<Watchlist />}
          />
          <Route
            path="/movie-website-react/now-showing"
            element={<Popular />}
          />
          <Route path="/movie-website-react/movies" element={<Movies />} />
        </Routes>
      </main>
    </GlobalProvider>
  );
}

export default App;
