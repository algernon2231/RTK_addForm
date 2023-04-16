import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getPostsFetch } from './postState';
const Posts = () => {
    const { posts, isLoading } = useSelector(state => state.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPostsFetch());
    }, [dispatch]);
    return (
        <div className='max-w-[1440px] m-auto px-6 py-4'>
            <h1 className='text-4xl text-center'>Posts</h1>
            {isLoading ? (<h1 className="text-3xl font-bold text-center text-gray-800 py-8">Loading...</h1>) : (
                <>
                    {
                        posts.map(post => (
                            <div key={post.id} className='mb-2'>
                                <Link to={`/${post.id}`}> {post.title}</Link>
                            </div>
                        ))
                    }
                </>
            )}
        </div>
    )
}

export default Posts