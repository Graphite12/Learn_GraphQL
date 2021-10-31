let movies = [
  {
    id: 0,
    name: '트랜스포머',
    score: 5,
  },
  {
    id: 1,
    name: '트랜스포터',
    score: 80,
  },
  {
    id: 2,
    name: '기생충',
    score: 100,
  },
  {
    id: 3,
    name: '듄',
    score: 75,
  },
  {
    id: 4,
    name: '배틀필드 - 하드라인',
    score: 0,
  },
  {
    id: 5,
    name: '콜오브듀티 - 모던워페어 리부트',
    score: 95,
  },
  {
    id: 6,
    name: '어벤져스',
    score: 70,
  },
  {
    id: 7,
    name: '크라이시스',
    score: 80,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((m) => id === m.id);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((m) => id !== m.id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score,
  };

  movies.push(newMovie);

  return newMovie;
};
