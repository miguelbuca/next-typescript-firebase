import { all, takeLatest } from 'redux-saga/effects'
import { UsersTypes } from './ducks/users/types'
import { load } from './ducks/users/sagas'

export default function* rootSaga() {
    return yield all(
        takeLatest(UsersTypes.LOAD_SUCCESS, load)
    )
}