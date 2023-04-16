import { call, put, takeEvery } from 'redux-saga/effects'
import { getPostsSuccess } from './postState'

function* workGetPostsFetch() {
    const posts = yield call(() => fetch('https://jsonplaceholder.typicode.com/posts'));
    const postsJson = yield posts.json();
    const data = postsJson.slice(0, 10);


    yield put(getPostsSuccess(data));
}
function* postSaga() {
    yield takeEvery('posts/getPostsFetch', workGetPostsFetch);
}
export default postSaga;