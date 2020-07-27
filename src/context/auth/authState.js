import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken'

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGOUT,
    EDIT_USER,
    RESET
} from '../types';


const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        edit_successful:false,
        error: null,
        user: null
    };
    const [state, dispatch] = useReducer(authReducer, initialState);

    //register user

    const Register = async formData => {
        const config = {
            headers: {
                method: 'Post',
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post("http://localhost:5000/api/v1/auth/register", formData, config);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
        } catch (error) {
            console.log(error)
            dispatch({
                type: REGISTER_FAIL,
                payload: error
            });
        }
    }

    //load user
    const loadUser = async () => {
        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }
        try {
            const res = await axios.get('http://localhost:5000/api/v1/auth/me');
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        } catch (error) {
            dispatch({
                type: AUTH_ERROR
            })
        }
    }
    //login user
    const Login = async formData => {
        const config = {
            headers: {
                method: 'Post',
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post("http://localhost:5000/api/v1/auth/login", formData, config)
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
            loadUser();
        } catch (error) {
            dispatch({
                type: LOGIN_FAIL,
                payload: error.response.data
            });
        }
    }

    const editUser = async (formData) => {
        try {
            const res = await axios.put(`http://localhost:5000/api/v1/auth/updatedetails`, formData);
            dispatch({
                type: EDIT_USER,
                payload: res.data
            });
        } catch (error) {
            console.log(error.response.data)
        }
    }
    const restFLags = () => {
        dispatch({
            type: RESET
        });
    }

    // logout user
    const logout = () => {
        dispatch({ type: LOGOUT })
    }

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                error: state.error,
                user: state.user,
                edit_successful: state.edit_successful,
                Register,
                Login,
                loadUser,
                logout,
                editUser,
                restFLags
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};
export default AuthState;