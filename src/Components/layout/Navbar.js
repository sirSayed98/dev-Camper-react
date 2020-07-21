import React, { Fragment, useContext,useEffect } from 'react'

import { Link } from "react-router-dom"
import authContext  from '../../context/auth/authContext'
const Navbar = (props) => {
    const AuthContext = useContext(authContext);
    const { isAuthenticated,loadUser,user} = AuthContext;

    useEffect(() => {
        loadUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const guest = (
        <Fragment>
            <li className="nav-item">
                <Link className="nav-link" to="/login"
                ><i className="fas fa-sign-in-alt"></i> Login
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/register"
                ><i className="fas fa-user-plus"></i> Register </Link>
            </li>
        </Fragment>
    )
    const authUser = (name)  => {
        return (
            <Fragment>
                <li className="nav-item dropdown">
                    <Link
                        className="nav-link dropdown-toggle"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                    >
                        <i className="fas fa-user"></i> {name}
                    </Link>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="manage-bootcamp.html"
                        >Manage Bootcamp</a
                        >
                        <a className="dropdown-item" href="manage-reviews.html"
                        >Manage Reviews</a
                        >
                        <a className="dropdown-item" href="manage-account.html"
                        >Manage Account</a
                        >
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="login.html"
                        ><i className="fas fa-sign-out-alt"></i> Logout</a
                        >
                    </div>
                </li>
            </Fragment>
        )
    };
    let name = (!user) ? "Account" : user.data.name;
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/"><i className="fas fa-laptop-code"></i> DevCamper</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">

                        {!isAuthenticated ? guest : authUser(name)}
                        <li className="nav-item d-none d-sm-block">
                            <Link className="nav-link" to="#"></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Bootcamps">Browse Bootcamps</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar 
