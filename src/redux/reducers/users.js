import {ROLE_LIST, LIST_USER, AUTHENTICATION} from "../actions/actionTypes";

const initialState = {
    roles: [],
    listUsers: [],
    user: {},
    auth: {}
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case ROLE_LIST:
            return {
                roles: action.payload.data,
                listUsers: state.listUsers,
                user: state.user,
                auth: state.auth
            }
        case LIST_USER:
            return {
                roles: state.roles,
                listUsers: action.payload.data,
                user: state.user,
                auth: state.auth
            }
        case AUTHENTICATION:
            return {
                roles: state.roles,
                listUsers: state.listUsers,
                user: state.user,
                auth: action.payload.data
            }
        default:
            return state;
    }
}

export default users;