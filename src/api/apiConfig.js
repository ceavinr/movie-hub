import { format } from "date-fns";

export const API_KEY = "api_key=9fee2dfca9fac3b1049c2bca2752291c";
export const BASE_URL = "https://api.themoviedb.org/3";

const current = new Date();
var datetime = format(current, "yyyy-MM-dd");
current.setDate(current.getDate() - 21);
var previousMonth = format(current, "yyyy-MM-dd");

const apiConfig = {
  movie: {
    POPULAR_URL:
      BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY,
    NOW_SHOWING_URL:
      BASE_URL +
      `/discover/movie?primary_release_date.gte=${previousMonth}&primary_release_date.lte=${datetime}&` +
      API_KEY,
    SEARCH_URL: BASE_URL + "/search/movie?" + API_KEY,
    GENRE_URL: BASE_URL + "/genre/movie/list?" + API_KEY,
  },
  tv: {
    POPULAR_URL: BASE_URL + "/discover/tv?sort_by=popularity.desc&" + API_KEY,

    NOW_SHOWING_URL:
      BASE_URL +
      `/discover/tv?primary_release_date.gte=${previousMonth}&primary_release_date.lte=${datetime}&` +
      API_KEY,
    SEARCH_URL: BASE_URL + "/search/tv?" + API_KEY,
    GENRE_URL: BASE_URL + "/genre/tv/list?" + API_KEY,
  },
};

export default apiConfig;

const anjay = {
  genres: [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ],
};
