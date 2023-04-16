import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postDel, selectedPost } from './PostsSlice';
import { AiOutlineCloseCircle } from 'react-icons/ai'
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';
const PostsList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectedPost);

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

    const handleDelete = id => {
        dispatch(postDel(id));
    }
    const renderedPosts = orderedPosts.map(post => (

        <article key={post.id} className="bg-gray-900 m-2 p-2 h-[150px] rounded-md relative">
            <h3 className='text-2xl text-gray-300 '>{post.title}</h3>
            <p className='text-sm text-gray-300'>{post.content.substring(0, 100)}</p>
            <PostAuthor userId={post.userId} />&nbsp;<TimeAgo date={post.date} />
            <ReactionButtons post={post} />
            <AiOutlineCloseCircle className='text-white absolute top-1 right-1' size={30} onClick={() => handleDelete(post.id)} />
        </article>
    ))
    return (
        <div className=''>
            <h2 className='text-4xl m-2 p-2'>Posts</h2>
            <div className='w-full'>
                {renderedPosts}
            </div>
        </div>

    )
}

export default PostsList