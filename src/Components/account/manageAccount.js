/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'

import { Link } from "react-router-dom"
import authContext from '../../context/auth/authContext'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const manageAccount = () => {
    const AuthContext = useContext(authContext);
    const MySwal = withReactContent(Swal);
    const { user, editUser, restFLags, edit_successful, loadUser } = AuthContext;
    const [newUser, setNewUser] = useState({
        name: user ? user.data.name : "",
        email: user ? user.data.email : ""
    })
    const { name, email } = newUser;

    useEffect(() => {
        if (user === null) {
            loadUser();
        }
        if (user !== null) {
            setNewUser(user.data);
        }
    }, [user])
    useEffect(() => {
        if (edit_successful) {
            MySwal.fire(
                'Edit Successful!',
                `Now Your name is ${name} and email is ${email}`,
                'success'
            );
            restFLags();
        }
    }, [edit_successful])

    const onChange = e => setNewUser({ ...newUser, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        editUser({
            name,
            email
        })
        localStorage.setItem('name', name);
    }
    return (
        <section className="container mt-5">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <div className="card bg-white py-2 px-4 mt-5">
                        <div className="card-body">
                            <h1 className="mb-2">Manage Account</h1>
                            <form onSubmit={onSubmit}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        onChange={onChange}
                                        value={newUser ? newUser.name : "name"}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Role</label>
                                    <input
                                        type="text"
                                        name="role"
                                        className="form-control"
                                        disabled
                                        value={user ? user.data.role : "role"}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        onChange={onChange}
                                        value={newUser ? newUser.email : "email"}
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
                                            <Link
                                                to="/update-Password"
                                                className="btn btn-secondary btn-block">Update Password</Link>
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
