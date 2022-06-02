import React, { createContext, useReducer, useEffect } from "react";

// initial state
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// reducer
function reducer(state, action) {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) =>
            movie.id !== action.payload || !movie.hasOwnProperty("title")
        ),
      };
    case "REMOVE_TV_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) =>
            movie.id !== action.payload || !movie.hasOwnProperty("name")
        ),
      };
    case "REMOVE_ALL_FROM_WATCHLIST":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          (movie) => movie.id === action.payload
        ),
      };
    default:
      return state;
  }
}

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  }, [state]);

  // actions
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };
  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };
  const removeTvFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_TV_FROM_WATCHLIST", payload: id });
  };
  const removeAllFromWatchlist = () => {
    dispatch({ type: "REMOVE_ALL_FROM_WATCHLIST", payload: null });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        removeTvFromWatchlist,
        removeAllFromWatchlist,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
