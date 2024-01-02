import {ROLE_LIST, LIST_USER} from "../actions/actionTypes";

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
        case LIST_USER:
            return {
                roles: state.roles,
                listUsers: action.payload.data,
                user: state.user
            }
        default:
            return state;
    }
}

export default users;