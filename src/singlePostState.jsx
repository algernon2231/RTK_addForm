import { createSlice } from "@reduxjs/toolkit";

const singlePostSlice = createSlice({
    name: 'post',
    initialState: {
        post: {},
        isLoading: false,
        error: null
    },
    reducers: {
        getPostFetch: (state) => {
            state.isLoading = true;
        },
        getPostSuccess: (state, action) => {
            state.isLoading = false;
            state.post = action.payload;
        },
        getPostFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload
        }
    }
})

export const { getPostFetch, getPostSuccess, getPostFailure } = singlePostSlice.actions
export default singlePostSlice.reducer;


export const getPost = async (id) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error(error.message)
    }
}

export const FETCH_SINGLE_POST_REQUEST = 'post/FETCH_SINGLE_POST_REQUEST';
export const fetchSinglePost = id => {
    return {
        type: FETCH_SINGLE_POST_REQUEST,
        payload: id
    }
}