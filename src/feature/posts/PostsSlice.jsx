import { createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns/esm";
import { nanoid } from "nanoid";

const initialState = [
    {
        id: 1,
        title: "First Item",
        content: "This is the content for the first item.",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
    {
        id: 2,
        title: "Second Item",
        content: "This is the content for the second item.",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
    {
        id: 3,
        title: "Third Item",
        content: "This is the content for the third item.",
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    }
];


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        date: new Date().toISOString(),
                        userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }
            }
        },
        postDel: (state, action) => {
            const newPosts = state.filter(post => post.id !== action.payload);
            return newPosts;
        },
        reactionAdded: (state, action) => {
            const { postId, reaction } = action.payload;
            const existingPost = state.find(post => post.id === postId);
            if (existingPost) {
                existingPost.reactions[reaction]++;
            }

        }
    },
})
export const { postAdded, postDel, reactionAdded } = postsSlice.actions;

export const selectedPost = state => state.posts;

export default postsSlice.reducer;