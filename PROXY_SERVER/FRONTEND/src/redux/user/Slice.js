import { createSlice } from '@reduxjs/toolkit';
import { loadState } from '../StateManagement';
import { initialState } from './InitialState';
import { reducers } from './Reducer';

const userSlice = createSlice({
    name: 'user',
    initialState: loadState('user', initialState),
    reducers,
})

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;