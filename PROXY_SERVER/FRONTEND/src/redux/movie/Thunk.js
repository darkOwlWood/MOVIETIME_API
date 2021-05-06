import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { saveState } from '../StateManagement';

const PROTOCOL = process.env.PROTOCOL;
const PROXY_SERVER = process.env.PROXY_SERVER;
const WITH_CREDENTIALS = process.env.WITH_CREDENTIALS;

const getSectionsNames = listLength => Array(listLength).fill(0).map((val, ndx) => `section${String.fromCharCode(65 + ndx)}MovieList`);

const getToken = async () => {
    try {
        await axios.post(`${PROTOCOL}://${PROXY_SERVER}/auth/token`, {}, { withCredentials: WITH_CREDENTIALS });
        return true;
    } catch (err) {
        console.error(err);
        return false;
    }
}

const performRequest = async (axiosConfig, retry) => {
    try {
        const resp = await axios(axiosConfig);
        return resp;
    } catch (err) {
        const { status } = err.response;
        return (retry && status === 401 && await getToken()) && await performRequest(axiosConfig, false);
    }
}

export const setSectionsMovies = createAsyncThunk('movie/setSectionsMovies', async (tagsArr, thunkAPI) => {
    const axiosConfigList = tagsArr.map(tag => ({
        method: 'GET',
        url: `${PROTOCOL}://${PROXY_SERVER}/movies?${tag ? `tags=${tag}` : ''}`,
        withCredentials: WITH_CREDENTIALS,
    }));

    const respList = [];
    for (let axiosConfig of axiosConfigList) {
        respList.push(await performRequest(axiosConfig, true));
    }

    const isAllRequestDone = respList.reduce((accu, next) => accu && Boolean(next));

    return isAllRequestDone ? respList.map(resp => resp.data) : thunkAPI.rejectWithValue();
});

export const setUserMovies = createAsyncThunk('movie/setUserMovies', async (none, thunkAPI) => {
    const axiosConfig = {
        method: 'GET',
        url: `${PROTOCOL}://${PROXY_SERVER}/userMovies`,
        withCredentials: WITH_CREDENTIALS,
    }

    const resp = await performRequest(axiosConfig, true);

    return Boolean(resp) ? resp.data : thunkAPI.rejectWithValue();
});

export const addUserMovie = createAsyncThunk('movie/addUserMovie', async (movieData, thunkAPI) => {
    const axiosConfig = {
        method: 'POST',
        url: `${PROTOCOL}://${PROXY_SERVER}/userMovies`,
        data: { movieId: movieData.id },
        withCredentials: WITH_CREDENTIALS,
    }

    const resp = await performRequest(axiosConfig, true);

    return Boolean(resp) ? movieData : thunkAPI.rejectWithValue();
});

export const deleteUserMovie = createAsyncThunk('movie/deleteUserMovie', async (movieId, thunkAPI) => {
    const axiosConfig = {
        method: 'DELETE',
        url: `${PROTOCOL}://${PROXY_SERVER}/userMovies`,
        data: { movieId },
        withCredentials: WITH_CREDENTIALS,
    }

    const resp = await performRequest(axiosConfig, true);

    return Boolean(resp) ? { movieId } : thunkAPI.rejectWithValue();
});

export const extraReducers = builder => {
    builder
        .addCase(setSectionsMovies.fulfilled, (state, action) => {
            const { payload: dataSections } = action;
            const sectionList = getSectionsNames(dataSections.length);
            sectionList.forEach((section, ndx) => {
                state[section] = dataSections[ndx].results;
            });
            saveState('movie', state);
        })
        .addCase(setUserMovies.fulfilled, (state, action) => {
            const { payload: dataUser } = action;
            state.userMovieList = dataUser.results;
            saveState('movie', state);
        })
        .addCase(addUserMovie.fulfilled, (state, action) => {
            const { payload: movieData } = action;
            !Boolean(state.userMovieList.find(movie => movie.id === movieData.id)) && state.userMovieList.push(movieData);
            saveState('movie', state);
        })
        .addCase(deleteUserMovie.fulfilled, (state, action) => {
            const { movieId } = action.payload;
            state.userMovieList = state.userMovieList.filter(movie => movie.id !== movieId);
            saveState('movie', state);
        })
        //REJECT
        .addMatcher(
            (action) => action.type.endsWith('/rejected'),
            (state, action) => {/**/ }
        )
}