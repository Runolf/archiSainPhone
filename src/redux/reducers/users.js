import {ROLE_LIST, LIST_USER, AUTHENTICATION} from "../actions/actionTypes";
import { USER_CREATE } from "../actions/actionTypes";

const initialState = {
    roles: [],
    listUsers: [],
    user: {},
    bearer: {}
}

const users = (state = initialState, action) => {
    switch (action.type) {
        case ROLE_LIST:
            return {
                roles: action.payload.data,
                listUsers: state.listUsers,
                user: state.user,
                bearer: state.bearer
            }
        case LIST_USER:
            return {
                roles: state.roles,
                listUsers: action.payload.data,
                user: state.user,
                bearer: state.bearer
            }
        case AUTHENTICATION:
            return {
                roles: state.roles,
                listUsers: state.listUsers,
                user: state.user,
                bearer: action.payload.data
            }
        case USER_CREATE:
            return {
                roles: state.roles,
                listUsers: state.listUsers,
                user: action.payload.data,
                bearer: state.bearer
            }
        default:
            return state;
    }
}

export default users;