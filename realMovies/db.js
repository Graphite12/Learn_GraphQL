import fetch from 'cross-fetch';
import axios from 'axios';

const API_URL = 'https://yts.mx/api/v2/list_movies.json?';

const BASE_URL = `https://yts.mx/api/v2/`;
const LIST_MOVIE_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTION_URL = `${BASE_URL}movie_suggestions.json`;

//fetch를 활용했을 경우
export const getMovies = (limit, rating) =>
  fetch(`${API_URL}`)
    .then((res) => res.json())
    .then((data) => data.data.movies);

export const getMoviesRQ = (limit, rating) => {
  let REQUEST_URL = API_URL;
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }

  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }

  return fetch(REQUEST_URL)
    .then((res) => res.json())
    .then((data) => data.data.movies);
};

//이건 axios
export const getAxiosMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(LIST_MOVIE_URL, {
    params: {
      limit,
      minimum_rating: rating,
    },
  });
  return movies;
};

export const getAxiosMovie = async (id) => {
  const {
    data: {
      data: { movie },
    },
  } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id,
    },
  });
  return movie;
};

export const getSuggestions = async (id) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(MOVIE_SUGGESTION_URL, {
    params: {
      movie_id: id,
    },
  });
  return movies;
};
