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
    RESET,
    UPDATE_PASSWORD,
    FAIL_UPDATE_PASSWORD,
    FORGET_PASSWORD,
    BASE_URL
} from '../types';


const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        edit_successful: false,
        error: null,
        user: null,
        forgetPasswordMessage:''
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
            const res = await axios.post(`${BASE_URL}/api/v1/auth/register`, formData, config);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
            loadUser();
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
            const res = await axios.get(`${BASE_URL}/api/v1/auth/me`);
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
            const res = await axios.post(`${BASE_URL}/api/v1/auth/login`, formData, config)
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
            const res = await axios.put(`${BASE_URL}/api/v1/auth/updatedetails`, formData);
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
    const UpdatePassword = async (formData) => {
        try {
            const res = await axios.put(`${BASE_URL}/api/v1/auth/updatepassword`,formData);
            dispatch({
                type: UPDATE_PASSWORD,
                payload: res.data
            });
        } catch (error) {
            console.log(error.response.data);
            dispatch({
                type:FAIL_UPDATE_PASSWORD,
                payload:error.response.data
            })
        }
    }
    const ForgetPassword = async (formData)=>{
        try {
            const res = await axios.post(`${BASE_URL}/api/v1/auth/forgotpassword`,formData);
            dispatch({
                type: FORGET_PASSWORD,
                payload: res.data.data
            });
        } catch (error) {
            console.log(error);
        }
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
                forgetPasswordMessage: state.forgetPasswordMessage,
                Register,
                Login,
                loadUser,
                logout,
                editUser,
                restFLags,
                UpdatePassword,
                ForgetPassword,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};
export default AuthState;