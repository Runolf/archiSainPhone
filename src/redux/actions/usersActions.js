import {USER_CREATE} from './actionTypes';

export const postUserAction = (data) => ({
    type: USER_CREATE,
    payload: {
        data
    }
})