import { call, put } from 'redux-saga/effects'
import { firestore } from '../../../../client/app'
import { collection, setDoc, doc, getDocs } from 'firebase/firestore'

import { loadSuccess, loadFailure } from './actions'
import { Users } from './types'

export function* load() {
    try {

/*
        yield put(loadSuccess(async () Promise<Users[]> =>{
            return await (await getDocs(collection(firestore, "users"))).docs
            .map((doc): Users => {
                const { email, picture, name, id } = doc?.data()

                return {
                    id,
                    email,
                    picture,
                    name
                }
            });
        }))*/
        
    } catch (error) {
        yield put(loadFailure())
    }
}