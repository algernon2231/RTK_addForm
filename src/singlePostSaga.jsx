import { call, put, takeEvery } from 'redux-saga/effects'
import { FETCH_SINGLE_POST_REQUEST, getPost, getPostFailure, getPostFetch, getPostSuccess } from './singlePostState';

function* fetchSinglePostSaga(action) {
    const id = action.payload;
    try {
        yield put(getPostFetch());
        const post = yield call(getPost, id);
        yield put(getPostSuccess(post));
    } catch (error) {
        yield put(getPostFailure(error.message))
    }
}
function* singlePostSaga() {
    yield takeEvery(FETCH_SINGLE_POST_REQUEST, fetchSinglePostSaga);
}



export default singlePostSaga