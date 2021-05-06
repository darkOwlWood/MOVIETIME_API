import { saveState } from '../StateManagement';

export const reducers = {
    login: (state, action) => {
        const { payload: name } = action;
        state.name = name;
        state.isLog = true;
        saveState('user', state);
    },
    logout: (state, action) => {
        state.name = '';
        state.isLog = false;
        saveState('user', state);
    },
}