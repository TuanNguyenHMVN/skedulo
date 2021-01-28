import { takeLatest, call, put } from 'redux-saga/effects';
import { getUserApi } from '../../api/api';
import { ACTIONS } from '../actions/actions';

export function* watcherSaga() {
    yield takeLatest(ACTIONS.GET_USER_LIST, getUserList);
    yield takeLatest(ACTIONS.CLEAR_USER_LIST, clearUserList);
}

function* getUserList({ keyword }) {
    const response = yield call(getUserApi, keyword);
    if (response.status === 200) {
        console.log('AAAAAAAAAAAAA', response);
        yield put({
            type: ACTIONS.GET_USER_LIST_SUCCESS,
            data: response.data,
        });
    } else {
        yield put({
            type: ACTIONS.GET_USER_LIST_FAIL,
            error: response.msg,
        });
    }
}

function* clearUserList() {
    const userList = [];
    yield put({ type: ACTIONS.CLEAR_USER_LIST_SUCCESS, data: userList });
}
