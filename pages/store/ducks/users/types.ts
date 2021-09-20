/**
 * Actions types
 */

export enum UsersTypes{
    'LOAD_REQUEST' = '@user/LOAD_REQUEST',
    'LOAD_SUCCESS' = '@user/LOAD_SUCCESS',
    'LOAD_FAILURE' = '@user/LOAD_FAILURE',
}

/**
 * Data types
 */

export interface Users{
    id?: number | string,
    name: string,
    email: string,
    picture?: string
}

/**
 * State type
 */

export interface UsersState{
    readonly data: Users[],
    readonly loading: boolean,
    readonly error: boolean
}