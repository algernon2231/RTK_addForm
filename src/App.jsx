import React from 'react'
import AddPostForm from './feature/posts/AddPostForm'
import PostsList from './feature/posts/PostsList'

const App = () => {
  return (
    <div className='max-w-[1440px] w-full flex m-auto'>
      <div className='w-[40%]'>
        <AddPostForm />
      </div>
      <div className='w-[60%]'>
        <PostsList />
      </div>
    </div>
  )
}

export default App