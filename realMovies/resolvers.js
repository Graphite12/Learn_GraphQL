import {
  getMovies,
  getMoviesRQ,
  getAxiosMovie,
  getAxiosMovies,
  getSuggestions,
} from './db';

const realMovieResolvers = {
  Query: {
    movies: () => getMovies(),
    moviez: (_, { limit, rating }) => getMoviesRQ(limit, rating),
    movieA: (_, { id }) => getAxiosMovie(id),
    movieB: (_, { limit, rating }) => getAxiosMovies(limit, rating),
    movieC: (_, { id }) => getSuggestions(id),
  },
};

export default realMovieResolvers;
