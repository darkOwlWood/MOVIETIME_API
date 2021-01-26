import { createSlice } from '@reduxjs/toolkit';
import { loadState } from './movieInitalState';
import { reducers } from './moviesReducer';
import { extraReducers } from './moviesThunk';

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: loadState(),
    reducers,
    extraReducers,
});

export const { cleanRequest } = moviesSlice.actions;

export default moviesSlice.reducer;