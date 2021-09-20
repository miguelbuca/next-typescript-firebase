import { applyMiddleware, createStore, Store } from 'redux'
import { UsersState } from './ducks/users/types'

import rootReducer from './ducks'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

export interface ApplicationState{
    users: UsersState
}

const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga)
export default store;