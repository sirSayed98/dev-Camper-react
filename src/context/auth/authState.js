import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from '../types';


const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
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

return (
    <AuthContext.Provider
        value={{
            token: state.token,
            isAuthenticated: state.isAuthenticated,
            error: state.error,
            loading: state.loading,
            user: state.user,
            Register
        }}
    >
        {props.children}
    </AuthContext.Provider>
);
};
export default AuthState;