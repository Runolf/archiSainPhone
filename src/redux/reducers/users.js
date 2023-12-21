import {ROLE_LIST} from "../actions/actionTypes";

const initialState = {
    roles: [],
    listUsers: [],
    user: {}
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case ROLE_LIST:
            return {
                roles: action.payload.data,
                listUsers: state.listUsers,
                user: state.user
            }
        default:
            return state;
    }
}