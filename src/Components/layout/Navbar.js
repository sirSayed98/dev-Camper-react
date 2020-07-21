import React, { Fragment, useContext,useEffect } from 'react'

import { Link } from "react-router-dom"
import authContext  from '../../context/auth/authContext'
const Navbar = (props) => {
    const AuthContext = useContext(authContext);
    const { isAuthenticated,loadUser} = AuthContext;

    useEffect(() => {
        loadUser();
        console.log(AuthContext)
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
    const authUser = (
        <Fragment>
            <li class="nav-item dropdown">
                <Link
                    class="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                >
                    <i class="fas fa-user"></i> Account
                </Link>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="manage-bootcamp.html"
                    >Manage Bootcamp</a
                    >
                    <a class="dropdown-item" href="manage-reviews.html"
                    >Manage Reviews</a
                    >
                    <a class="dropdown-item" href="manage-account.html"
                    >Manage Account</a
                    >
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="login.html"
                    ><i class="fas fa-sign-out-alt"></i> Logout</a
                    >
                </div>
            </li>
        </Fragment>
    )
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

                        {!isAuthenticated ? guest : authUser}


                        <li className="nav-item d-none d-sm-block">
                            <Link className="nav-link" to="#"></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/bootcamps">Browse Bootcamps</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar 
