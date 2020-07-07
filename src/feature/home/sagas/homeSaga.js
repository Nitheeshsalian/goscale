import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as API from "../api/homeApi";

import * as types from "../../../types/types";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
    try {
        const response = yield call(API.fetchUser, action.payload);
        console.log("response " + response);
        yield put({ type: types.USER_FETCH_SUCCESS, payload: response });
    } catch (e) {
        yield put({ type: types.USER_FETCH_FAILURE, payload: e.message });
    }
}

export function* homeSaga() {
    yield takeEvery(types.USER_FETCH_REQUEST, fetchUser);
}
