import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Posts from './Posts';
import Post from './Post';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/:id' element={<Post />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App