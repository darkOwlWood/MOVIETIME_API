import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../moviesRedux/moviesSlice';

export default configureStore({
    reducer: {
        movies: moviesReducer,
    }
});