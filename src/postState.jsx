import { createSlice } from '@reduxjs/toolkit'
export const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoading: false
    },
    reducers: {
        getPostsFetch: (state) => {
            return {
                ...state,
                isLoading: true
            }
        },
        getPostsSuccess: (state, action) => {
            return {
                ...state,
                posts: action.payload,
                isLoading: false
            }
        },
        getPostsFailure: (state) => {
            return {
                ...state,
                isLoading: false
            }
        }
    }
})

export const { getPostsFetch, getPostsSuccess, getPostsFailure } = postSlice.actions
export default postSlice.reducer;