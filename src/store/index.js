import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../slices/moviesSlice';

export default configureStore({
    reducer: {
        movies: moviesReducer,
    }
});