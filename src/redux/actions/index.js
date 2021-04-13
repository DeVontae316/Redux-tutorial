import * as type from '../types';
export const signUserUp = (data) => {

    return {
        type: type.SIGN_USER_UP,
        payload: data,
    }
}