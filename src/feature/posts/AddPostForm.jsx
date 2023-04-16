import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'
import { postAdded } from './PostsSlice'

const AddPostForm = () => {
    const dispatch = useDispatch();
    const users = useSelector(selectAllUsers);


    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);
    const onAuthorChanged = e => setUserId(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(postAdded(title, content, userId));
        setTitle('');
        setContent('');
        setUserId('');
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);
    const usersOptions = users.map(user => (
        <option key={user.id} value={user.id}>{user.name}</option>
    ))
    return (
        <div className='justify-center '>
            <h2 className='text-4xl m-2 p-2'>Add a New Form</h2>
            <form action="" onSubmit={handleSubmit} className="m-2 p-2 flex flex-col bg-gray-900 ">
                <label className='text-gray-300 mb-2' htmlFor="postTitle">Post Title:</label>
                <input className='mb-2 focus:outline-none p-2' type="text" name="" id="" value={title} onChange={onTitleChanged} />
                <label className='text-gray-300 mb-2'>Author:</label>
                <select value={userId} onChange={onAuthorChanged}>
                    <option value=''></option>
                    {usersOptions}
                </select>
                <label className='text-gray-300' htmlFor="postContent">Content:</label>
                <textarea className='mb-3 focus:outline-none p-2' name="" id="" value={content} onChange={onContentChanged}></textarea>
                <button type="submit" className='w-full border-2 text-gray-300 border-gray-200 px-4 py-2 hover:bg-gray-300 hover:text-gray-900' disabled={!canSave}>Save Post</button>
            </form>
        </div>

    )
}

export default AddPostForm