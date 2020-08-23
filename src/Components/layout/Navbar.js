import React, { Fragment, useContext, useEffect } from 'react'

import { Link } from "react-router-dom"
import authContext from '../../context/auth/authContext'
import bootcampContext from '../../context/bootcamp/bootcampContext'
const Navbar = (props) => {
    const AuthContext = useContext(authContext);
    const BootcampContext = useContext(bootcampContext);

    let { bootcamps, loadBootcamp, resetFlags } = BootcampContext;
    let { user, logout } = AuthContext;

    const onLogout = () => {
        logout();
        window.location.reload(false);
    }


    useEffect(() => {
        if (user != null) {
            if (user.data.role === 'publisher' && bootcamps == null)
                loadBootcamp(); //to get bootcamp for publisher
            else
                resetFlags();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

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
                    <i className="fas fa-user"></i> {localStorage.getItem('name') !== null ? localStorage.getItem('name') : "Account"}
                </a>
                <div className="dropdown-menu">
                    {
                        (bootcamps === null && user !== null && user.data.role === 'publisher') ?
                            <Link className="dropdown-item" to="/create-Bootcamp">Create Bootcamp</Link>
                            : null
                    }
                    {
                        (bootcamps !== null && user !== null && user.data.role === 'publisher') ?
                            <Link className="dropdown-item" to="/manage-bootcamp">Manage Bootcamp</Link>
                            : null
                    }
                    {(user !== null && user.data.role === 'user') ? <Link className="dropdown-item" to="/manage-Reviews"
                    >Manage Reviews</Link> : null}
                    <Link className="dropdown-item" to="/manage-Account"
                    >Manage Account</Link>
                    <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" onClick={onLogout} to="/"><i className="fas fa-sign-out-alt"></i> Logout</Link>
                </div>
            </li>
        </Fragment>
    )


    return (
        <nav className="navbar bg-danger navbar-expand-md navbar-dark  fixed-top">
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

                        {localStorage.getItem('token') ? authUser : guest}
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
