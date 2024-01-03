import {ROLE_LIST, LIST_USER, AUTHENTICATION} from "./actionTypes";

export const getAllRole = (data) => ({
    type: ROLE_LIST,
    payload: {
        data
    }
})

export const getAllUsersAction = (data) => ({
    type: LIST_USER,
    payload: {
        data
    }
})

export const authenticationAction = (data) => ({
    type: AUTHENTICATION,
    payload: {
        data
    }
})