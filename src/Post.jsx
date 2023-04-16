import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchSinglePost } from './singlePostState';

const Post = () => {
    const { id } = useParams();
    const { post, isLoading } = useSelector(state => state.post);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSinglePost(id));
    }, [dispatch, id]);

    return (
        <>
            {
                isLoading ? (<h1 className="text-3xl font-bold text-center text-gray-800 py-8">Loading...</h1>) : (
                    <div>
                        <h1 className='text-3xl font-bold text-center'>{post.title}</h1>
                        <h2>ID : {post.id}</h2>
                        <p>{post.body}</p>
                    </div>
                )}
        </>
    )
}

export default Post