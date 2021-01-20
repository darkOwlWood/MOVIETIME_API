import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const SERVER_URL = 'http://localhost:8088';

export const axiosRequest = async ({ method, endpoint, data, headers, tokenCallBack }, retry) => {
    const axiosConfig = {
        method,
        url: `${SERVER_URL}/${endpoint}`,
        data,
        headers,
        withCredentials: true,
    };

    try {
        tokenCallBack && (await tokenCallBack());
        return await axios(axiosConfig);
    } catch (err) {
        if (err.response.status === 401 && retry) {
            const tokenCallBack = async () => {
                await axios.post(`${SERVER_URL}/authserver/token`, {}, { withCredentials: true });
            }
            return await axiosRequest({ method, endpoint, data, headers, tokenCallBack }, false);
        }

        const { status, statusText, data: { stack } } = err.response;
        stack && console.log(`:::>>${stack}<<:::`);
        return { isError: true, status, statusText };
    }
}

export const loginUser = createAsyncThunk('movies/loginUser', async (dataUser, thunkAPI) => {//<<->>
    const requestConfig = {
        method: 'POST',
        endpoint: 'authserver/login',
        data: {},
        headers: { Authorization: `Basic ${btoa(`${dataUser.email}:${dataUser.password}`)}` },
    };
    delete dataUser.password;

    const resp = await axiosRequest(requestConfig, true);

    if (resp.isError) {
        return thunkAPI.rejectWithValue(resp);
    } else {
        const { name } = resp.data;
        return { name };
    }
});

export const logoutUser = createAsyncThunk('movies/logoutUser', async (none, thunkAPI) => {//<<->>
    const requestConfig = {
        method: 'DELETE',
        endpoint: 'authserver/logout',
        data: {},
        headers: {},
    };

    const resp = await axiosRequest(requestConfig, true);

    if (resp.isError) {
        return thunkAPI.rejectWithValue(resp);
    } else {
        const { message } = resp.data;
        return { message };
    }
});

export const setMoviesSection = createAsyncThunk('movies/setMoviesSection', async (tagsArr, thunkAPI) => {//<<->>
    const configList = tagsArr.map(tag => ({
        method: 'GET',
        endpoint: `apiserver/movies?${tag ? `tags=${tag}` : ''}`,
        data: {},
        headers: {},
    }));

    const resp = [];
    for (let config of configList) {
        resp.push(await axiosRequest(config, true));
    }

    const [resultA, resultB, resultC] = resp;

    if (resultA.isError || resultB.isError || resultC.isError) {
        return thunkAPI.rejectWithValue(resultA);
    } else {
        return { resultA: resultA.data, resultB: resultB.data, resultC: resultC.data };
    }
});

export const setUserMovies = createAsyncThunk('movies/setUserMovies', async (none, thunkAPI) => {//<<->>
    const requestConfig = {
        method: 'GET',
        endpoint: 'apiserver/userMovies',
        data: {},
        headers: {},
    };

    const resp = await axiosRequest(requestConfig, true);

    if (resp.isError) {
        return thunkAPI.rejectWithValue(resp);
    } else {
        const { results } = resp.data;
        return { results };
    }
});

export const addUserMovie = createAsyncThunk('movies/addUserMovie', async (movieData, thunkAPI) => {//<<->>
    const requestConfig = {
        method: 'POST',
        endpoint: 'apiserver/userMovies',
        data: { movieId: movieData.id },
        headers: {},
    };

    const resp = await axiosRequest(requestConfig, true);

    if (resp.isError) {
        return thunkAPI.rejectWithValue(resp);
    } else {
        const { resultId } = resp.data;
        return { resultId, movieData };
    }
});

export const deleteUserMovie = createAsyncThunk('movies/deleteUserMovie', async (movieId, thunkAPI) => {//<<->>
    const requestConfig = {
        method: 'DELETE',
        endpoint: `apiserver/userMovies/${movieId}`,
        data: {},
        headers: {},
    };

    const resp = await axiosRequest(requestConfig, true);

    if (resp.isError) {
        return thunkAPI.rejectWithValue(resp);
    } else {
        return { movieId };
    }
});

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        request: {
            error: false,
            code: 0,
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
            .addCase(setUserMovies.fulfilled, (state, action) => {
                const { results } = action.payload;
                state.userInfo.movieList = results;
            })
            .addCase(addUserMovie.fulfilled, (state, action) => {
                action.payload.resultId && state.userInfo.movieList.push(action.payload.movieData);
            })
            .addCase(deleteUserMovie.fulfilled, (state, action) => {
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
                state.userInfo.isLog = false;
            })
            //REJECT
            .addMatcher(
                (action) => action.type.endsWith('/rejected'),
                (state, action) => {
                    state.request.error = true;
                    state.request.code = action.payload.status;
                    state.request.message = action.payload.statusText;
                }
            )
    }
});

export const getErrorCode = state => state.movies.request.code;

export const getName = state => state.movies.userInfo.name;

export const getIsLog = state => state.movies.userInfo.isLog;

export const getUserMovieList = state => state.movies.userInfo.movieList;

export const getMoviesSection = moviesSection => state => state.movies[moviesSection];

export default moviesSlice.reducer;