import { format } from "date-fns";

export const API_KEY = "api_key=9fee2dfca9fac3b1049c2bca2752291c";
export const BASE_URL = "https://api.themoviedb.org/3";

const current = new Date();
var datetime = format(current, "yyyy-MM-dd");
current.setDate(current.getDate() - 21);
var previousMonth = format(current, "yyyy-MM-dd");

const apiConfig = {
  people: {
    PEOPLE_URL: BASE_URL + "/person/",
    SEARCH_URL: BASE_URL + "/search/person?" + API_KEY,
  },
  movie: {
    POPULAR_URL:
      BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY,
    NOW_SHOWING_URL:
      BASE_URL +
      `/discover/movie?primary_release_date.gte=${previousMonth}&primary_release_date.lte=${datetime}&` +
      API_KEY,
    SEARCH_URL: BASE_URL + "/search/movie?" + API_KEY,
    GENRE_URL: BASE_URL + "/genre/movie/list?" + API_KEY,
    DISCOVER_GENRE_URL: BASE_URL + "/discover/movie?with_genres=",
  },
  tv: {
    POPULAR_URL: BASE_URL + "/discover/tv?sort_by=popularity.desc&" + API_KEY,

    NOW_SHOWING_URL:
      BASE_URL +
      `/discover/tv?primary_release_date.gte=${previousMonth}&primary_release_date.lte=${datetime}&` +
      API_KEY,
    SEARCH_URL: BASE_URL + "/search/tv?" + API_KEY,
    GENRE_URL: BASE_URL + "/genre/tv/list?" + API_KEY,
    DISCOVER_GENRE_URL: BASE_URL + "/discover/tv?with_genres=",
  },
};

export default apiConfig;
