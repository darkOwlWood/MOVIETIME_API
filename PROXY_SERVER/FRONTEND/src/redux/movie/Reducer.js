import { saveState } from '../StateManagement';

export const reducers = {
    cleanList: (state, action) => {
        const movieLists = Object.keys(state);
        movieLists.forEach(list => {
            state[list] = [];
        });
        state.userMovieListFilter = '';
        saveState('movie', state);
    },
    setUserMovieListFilter: (state, action) => {
        const { payload: filter } = action;
        state.userMovieListFilter = filter;
        saveState('movie', state);
    }
}