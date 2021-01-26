export const getErrorCode = state => state.movies.request.code;

export const getName = state => state.movies.userInfo.name;

export const getIsLog = state => state.movies.userInfo.isLog;

export const getUserMovieList = state => state.movies.userInfo.movieList;

export const getMoviesSection = moviesSection => state => state.movies[moviesSection];