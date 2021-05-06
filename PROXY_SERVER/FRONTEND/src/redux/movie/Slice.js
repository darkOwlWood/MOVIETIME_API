import { createSlice } from '@reduxjs/toolkit';
import { loadState } from '../StateManagement';
import { initialState } from './InitialState';
import { reducers } from './Reducer';
import { extraReducers } from './Thunk';

const movieSlice = createSlice({
    name: 'movie',
    initialState: loadState('movie', initialState),
    reducers,
    extraReducers,
});

export const { cleanList, setUserMovieListFilter } = movieSlice.actions;

export default movieSlice.reducer;