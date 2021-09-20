import { action } from 'typesafe-actions'

import { UsersTypes, Users } from './types'

export const loadResquest = () => action(UsersTypes.LOAD_REQUEST);
export const loadSuccess = (data: Users[]) => action(UsersTypes.LOAD_SUCCESS, { data })
export const loadFailure = () => action(UsersTypes.LOAD_FAILURE);