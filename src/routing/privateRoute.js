/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../context/auth/authContext';

const PrivateRoute = ({ component: Component, ...rest }) => {

    return (
        <Route
            {...rest}
            render={props =>
                localStorage.getItem('token')!== null ?  (<Component {...props} />) :(<Redirect to='/login' />) 
            }
        />
    );
};

export default PrivateRoute;