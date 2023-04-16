import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    { id: 0, name: 'dongocanh' },
    { id: 1, name: 'linhxinh' },
    { id: 2, name: 'quandoan' }
]
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = state => state.users;
export default usersSlice.reducer