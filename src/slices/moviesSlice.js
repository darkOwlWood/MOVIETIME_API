import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const SERVER_URL = 'http://localhost:8088';

export const getToken =  createAsyncThunk('movies/getToken', async () => {
    const resp = await axios.post(`${SERVER_URL}/authserver/token`,{},{ withCredentials: true });
    return { message:resp.data.message };
});

export const loginUser = createAsyncThunk('movies/loginUser', async dataUser => {
    const resp = await axios.post(`${SERVER_URL}/authserver/login`, {}, {
                            headers:{ Authorization:`Basic ${btoa(`${dataUser.email}:${dataUser.password}`)}` },
                            withCredentials: true
                        });
    delete dataUser.password;
    const { name } = resp.data; 
    return { name };
});

export const logoutUser = createAsyncThunk('movies/logoutUser', async () => {
    const resp = await axios.delete(`${SERVER_URL}/authserver/logout`,{ withCredentials:true });
    const { message } = resp.data;
    return { message }; 
});

export const registerUser = createAsyncThunk('movies/registerUser', async userData => {
    const resp = await axios.post(`${SERVER_URL}/authserver/signin`,{ ...userData },{ withCredentials:true });
    const { insertedId } = resp.data;
    return { insertedId };
});

export const setMoviesSection = createAsyncThunk('movies/setMoviesSection', async tagsArr => {
    const [ tagsA, tagsB, tagsC ] = tagsArr;
    const resp = await Promise.all([
                            axios.get(`${SERVER_URL}/apiserver/movies?${tagsA? `tags=${tagsA}`:'' }`,{ withCredentials: true }),
                            axios.get(`${SERVER_URL}/apiserver/movies?${tagsB? `tags=${tagsB}`:'' }`,{ withCredentials: true }),
                            axios.get(`${SERVER_URL}/apiserver/movies?${tagsC? `tags=${tagsC}`:'' }`,{ withCredentials: true }),
                        ]);
    const [ resultA, resultB, resultC ] = resp.map( obj => obj.data);
    return { resultA, resultB, resultC };
});

export const getUserMovies = createAsyncThunk('movies/getUserMovies', async () => {
    const resp = await axios.get(`${SERVER_URL}/apiserver/userMovies`,{ withCredentials:true });
    const { results } = resp.data;
    return { results };
});

export const addUserMovie = createAsyncThunk('movies/addUserMovie', async movieData => {
    const { id:movieId } = movieData;
    const resp = await axios.post(`${SERVER_URL}/apiserver/userMovies`,{ movieId },{ withCredentials:true });
    const { resultId } = resp.data;
    return { resultId, movieData };
});

export const deleteUserMovie = createAsyncThunk('movies/deleteUserMovie', async movieId => {
    const resp = await axios.delete(`${SERVER_URL}/apiserver/userMovies/${movieId}`,{ withCredentials:true });
    console.log(resp);
    return { movieId };
});

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        request:{
            code: 0,
            error: false,
            message: '',
        },
        userInfo: {
            name: '',
            isLog: false,
            isPlay: false,
            movieList: [],
        },
        moviesSectionA: [],
        moviesSectionB: [],
        moviesSectionC: [],
    },
    reducers: {
    },
    extraReducers: builder => {
        builder
            //FULLFILLED
            .addCase(setMoviesSection.fulfilled, (state, action) => {
                const { resultA, resultB, resultC } = action.payload;
                state.moviesSectionA = resultA.results;
                state.moviesSectionB = resultB.results;
                state.moviesSectionC = resultC.results;
            })
            .addCase(getUserMovies.fulfilled, (state, action) => {
                const { results } = action.payload;
                state.userInfo.movieList = results;
            })
            .addCase(addUserMovie.fulfilled, (state, action) => {
                action.payload.resultId && state.userInfo.movieList.push(action.payload.movieData);
            })
            .addCase(deleteUserMovie.fulfilled,(state, action) => {
                const { movieId } = action.payload;
                state.userInfo.movieList = state.userInfo.movieList.filter(movie => movie.id !== movieId);
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                const { name } = action.payload;
                state.userInfo.name = name;
                state.userInfo.isLog = true;
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.userInfo.name = '';
                state.userInfo.isLog =  false;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                
            })
            .addCase(getToken.fulfilled, (state, action) => {
                state.request.error = false;
            })
            //REJECT
            .addMatcher(
                (action) => action.type.endsWith('/rejected'),
                (state, action) => {
                    state.request.error = true;
                }
            )
    }
});

export const getRequestError = state => state.movies.request.error;

export const getName = state => state.movies.userInfo.name;

export const getIsLog = state => state.movies.userInfo.isLog;

export const getUserMovieList = state => state.movies.userInfo.movieList;

export const getMoviesSection = moviesSection => state => state.movies[moviesSection];

export default moviesSlice.reducer;