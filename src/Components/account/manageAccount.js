/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react'

import { Link } from "react-router-dom"
import authContext from '../../context/auth/authContext'


const manageAccount = () => {
    const AuthContext = useContext(authContext);
    let { user } = AuthContext;
    return (
        <section className="container mt-5">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <div className="card bg-white py-2 px-4 mt-5">
                        <div className="card-body">
                            <h1 className="mb-2">Manage Account</h1>
                            <form>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        name="title"
                                        className="form-control"
                                        placeholder="Name"
                                        value="John Doe"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Email"
                                        value="jdoe@gmail.com"
                                    />
                                </div>
                                <div className="form-group">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input
                                                type="submit"
                                                value="Save"
                                                className="btn btn-success btn-block"
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <a
                                                href="update-password.html"
                                                className="btn btn-secondary btn-block">Update Password</a>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default manageAccount
