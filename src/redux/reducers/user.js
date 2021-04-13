import * as types from '../types'

const initialState = {
    user: null
}

export default function userReducer(state = initialState, action) {
    const { payload, type } = action;

    switch (type) {
        case types.SIGN_USER_UP:
            return {
                ...state,
                user: payload
            }
        default:
            return {
                state
            }
    }
}