import homeReducer from '../feature/home/reducer/homeReducer';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootSaga from '../sagas/index';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from "redux-logger";

import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  key: 'login',
  storage:AsyncStorage
};
const sagaMiddleware = createSagaMiddleware();

const loggerMiddleware = createLogger({
    predicate: (getState, action) => __DEV__,
});

const AppReducers = combineReducers({
  homeReducer: persistReducer(persistConfig, homeReducer),
});

let store = createStore(AppReducers, applyMiddleware(loggerMiddleware,sagaMiddleware));
let persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export default () => {
  return {store, persistor};
};
