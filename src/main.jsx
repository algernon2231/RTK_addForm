import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { configureStore, applyMiddleware, combineReducers } from '@reduxjs/toolkit'
import catsReducer from './catState.jsx'
import catSaga from './catSaga'
import postsReducer from './postState'
import postReducer from './singlePostState'

import postSaga from './postSaga'
import singlePostSaga from './singlePostSaga'
const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  posts: postsReducer,
  post: postReducer
})
const store = configureStore({
  reducer: reducer,
  middleware: [sagaMiddleware]

})

sagaMiddleware.run(postSaga);
sagaMiddleware.run(singlePostSaga);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
)
