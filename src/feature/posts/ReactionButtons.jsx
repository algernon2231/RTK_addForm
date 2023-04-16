import React from 'react'
import { useDispatch } from 'react-redux'
import { reactionAdded } from './PostsSlice';

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😲',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}

const ReactionButtons = ({ post }) => {

    const dispatch = useDispatch();
    const reactionsButton = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button key={emoji} onClick={() => handleClickEmoji(name)}>
                {emoji} <span className='text-gray-300'>{post.reactions[name]}</span>
            </button>
        )
    })
    const handleClickEmoji = (name) => {
        dispatch(reactionAdded({ postId: post.id, reaction: name }));
    }
    return (
        <div>{reactionsButton}</div>

    )
}

export default ReactionButtons