import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => 
{
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
                            <li className="nav-item">
                                <Link className="nav-link" href="login.html"
                                ><i className="fas fa-sign-in-alt"></i> Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" href="register.html"
                                ><i className="fas fa-user-plus"></i> Register </Link>
                            </li>
                            <li className="nav-item d-none d-sm-block">
                                <Link className="nav-link"to="#"></Link>
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
