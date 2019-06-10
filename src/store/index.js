import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';

import rootReducer from './ducks';
import rootSaga from './sagas';

const middlewares = [];

const sagaMonitor = null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const composer = applyMiddleware(...middlewares);

const store = createStore(rootReducer, composer);

sagaMiddleware.run(rootSaga);

export default store;
