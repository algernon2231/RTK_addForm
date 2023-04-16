import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers);
    const author = users.find(user => user.id === Number(userId));

    return (
        <span className='text-gray-300 text-sm'>by {author ? author.name : 'Unknown '}</span>
    )
}

export default PostAuthor