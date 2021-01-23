import { createSlice } from '@reduxjs/toolkit';
import { loadState } from './movieInitalState';
import { extraReducers } from './moviesThunk';

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: loadState(),
    reducers: {},
    extraReducers,
});

export const getErrorCode = state => state.movies.request.code;

export const getName = state => state.movies.userInfo.name;

export const getIsLog = state => state.movies.userInfo.isLog;

export const getUserMovieList = state => state.movies.userInfo.movieList;

export const getMoviesSection = moviesSection => state => state.movies[moviesSection];

export default moviesSlice.reducer;