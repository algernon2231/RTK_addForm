import { configureStore } from "@reduxjs/toolkit";
import PostsReducer from "./feature/posts/PostsSlice";
import UsersReducer from "./feature/users/usersSlice";
export const store = configureStore({
    reducer: {
        posts: PostsReducer,
        users: UsersReducer
    }
})