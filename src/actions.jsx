export const FETCH_SINGLE_POST_REQUEST = 'FETCH_SINGLE_POST_REQUEST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';

export const fetchSinglePost = (id) => {
    return {
        type: 'FETCH_SINGLE_POST_REQUEST',
        payload: id
    }
}
export const fetchSinglePostSuccess = (post) => {
    return {
        type: 'FETCH_POST_SUCCESS',
        payload: post
    }
}
export const getPost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) {
        throw newError(res.statusText);
    }
    const post = await res.json();
    return post;
}