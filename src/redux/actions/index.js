import {ROLE_LIST, LIST_USER, AUTHENTICATION, FIND_USER_BY_MAIL} from "./actionTypes";

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

export const getOneUserByMailAction = (data) => ({
    type: FIND_USER_BY_MAIL,
    payload: {
        data
    }
})