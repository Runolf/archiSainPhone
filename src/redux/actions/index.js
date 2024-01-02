import {ROLE_LIST, LIST_USER} from "./actionTypes";

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