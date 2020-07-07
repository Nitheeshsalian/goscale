import { all, fork } from "redux-saga/effects";
import {homeSaga} from '../feature/home/sagas/homeSaga'


export default function* rootSaga() {
    yield all([
      homeSaga(),
    ]);
}
