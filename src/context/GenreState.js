import React, { createContext, useReducer, useEffect } from "react";

// initial state
const initialState = {
  checklist: localStorage.getItem("checklist")
    ? JSON.parse(localStorage.getItem("checklist"))
    : [],
};

// create context
export const GenreContext = createContext(initialState);

// reducer
function reducer(state, action) {
  switch (action.type) {
    case "ADD_MOVIE_TO_CHECKLIST":
      return {
        ...state,
        checklist: [action.payload, ...state.checklist],
      };
    case "REMOVE_MOVIE_FROM_CHECKLIST":
      return {
        ...state,
        checklist: state.checklist.filter((movie) =>
          movie.genres.includes(action.payload)
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
    localStorage.setItem("checklist", JSON.stringify(state.checklist));
  }, [state]);

  // actions
  const addMovieToChecklist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_CHECKLIST", payload: movie });
  };
  const removeMovieFromChecklist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_CHECKLIST", payload: id });
  };
  const removeTvFromChecklist = (id) => {
    dispatch({ type: "REMOVE_TV_FROM_CHECKLIST", payload: id });
  };

  return (
    <GenreContext.Provider
      value={{
        checklist: state.checklist,
        addMovieToChecklist,
        removeMovieFromChecklist,
        removeTvFromChecklist,
      }}
    >
      {props.children}
    </GenreContext.Provider>
  );
};
