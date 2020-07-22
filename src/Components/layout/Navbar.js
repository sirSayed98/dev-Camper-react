import React, { Fragment, useContext, useEffect } from 'react'

import { Link } from "react-router-dom"
import authContext from '../../context/auth/authContext'
import bootcampContext from '../../context/bootcamp/bootcampContext'
const Navbar = (props) => {
    const AuthContext = useContext(authContext);
    const BootcampContext = useContext(bootcampContext);

    const { bootcamps } = BootcampContext;
    const { isAuthenticated, loadUser, user, logout } = AuthContext;
    const onLogout = () => {
        logout();
    }

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
    const authUser = (
        <Fragment>
            <li className="nav-item dropdown">
                <a
                    className="nav-link dropdown-toggle"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    href="/">
                    <i className="fas fa-user"></i> {(!user) ? "Account" : user.data.name}
                </a>
                <div className="dropdown-menu">
                    {bootcamps === null ? <Link className="dropdown-item" to="/create-Bootcamp">Create Bootcamp</Link> : <Link className="dropdown-item" to="/manage-bootcamp">Manage Bootcamp</Link>}

                    <a className="dropdown-item" href="manage-reviews.html"
                    >Manage Reviews</a
                    >
                    <a className="dropdown-item" href="manage-account.html"
                    >Manage Account</a
                    >
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" onClick={onLogout} to="/"><i className="fas fa-sign-out-alt"></i> Logout</Link>
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
                            <Link className="nav-link" to="/Bootcamps"> | Browse Bootcamps</Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar 
