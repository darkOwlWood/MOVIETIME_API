import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user/Slice';
import movieSlice from './movie/Slice';

export default configureStore({
    reducer: {
        user: userSlice,
        movie: movieSlice,
    }
});