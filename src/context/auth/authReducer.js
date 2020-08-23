import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    AUTH_ERROR,
    USER_LOADED,
    LOGOUT,
    EDIT_USER,
    RESET,
    UPDATE_PASSWORD,
    FAIL_UPDATE_PASSWORD,
    FORGET_PASSWORD
} from '../types';

export default (state, action) => {

    switch (action.type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            };
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token);
            localStorage.setItem('name', action.payload.name);
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                error: null,
            };
        case REGISTER_FAIL:
        case LOGIN_FAIL:
        case AUTH_ERROR:
        case LOGOUT:
            localStorage.removeItem('token');
            localStorage.removeItem('name');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }
        case EDIT_USER:
            return {
                ...state,
                user: action.payload,
                edit_successful: true,
            }
        case RESET:
            return {
                ...state,
                edit_successful: false,
                error: null,
                forgetPasswordMessage: ""

            }
        case FAIL_UPDATE_PASSWORD:
            return {
                ...state,
                error: action.payload
            }
        case UPDATE_PASSWORD:
            return {
                ...state,
                edit_successful: true
            };
        case FORGET_PASSWORD: return {
            ...state,
            forgetPasswordMessage: action.payload
        }
        default:
            return state;

    }
}