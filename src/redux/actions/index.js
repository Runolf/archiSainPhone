import {ROLE_LIST} from "./actionTypes";

export const getAllRole = (data) => ({
    type: ROLE_LIST,
    payload: {
        data
    }
})