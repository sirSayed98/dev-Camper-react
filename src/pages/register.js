/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import AuthContext from '../context/auth/authContext';
import React, { useContext, useEffect, useState } from 'react'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const register = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const authContext = useContext(AuthContext);

    const { Register, error, isAuthenticated } = authContext;
    const MySwal = withReactContent(Swal);

    useEffect(() => {
        if(localStorage.getItem('token')!== null)
        props.history.push('/');

    },[])
   
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
        role: 'user'
    });
    const { name, email, password, password2, role } = user;
    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
    const setRole = (ro) => setUser({ ...user, role: ro });
    const onSubmit = e => {
        e.preventDefault();
        if (name === '' || email === '' || password === '' || password2 === '')
            console.log(" fill all");
        else if (password !== password2) {
            console.log("invalid password ")
        }
        else {
            Register({
                name, email, password, role
            })
            RegisterDone();

        }
    }
    function RegisterDone() {
        MySwal.fire(
            `Welcome ${name}`,
            'Discover our courses',
            'success')
    }

    return (
        <section className="form mt-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <div className="card bg-white p-4 mb-4 mt-5">
                            <div className="card-body">
                                <h1><i className="fas fa-user-plus"></i> Register</h1>
                                <p>
                                    Register to list your bootcamp or rate, review and favorite
                                    bootcamps
								</p>
                                <form onSubmit={onSubmit}>
                                    <div className="form-group">
                                        <label for="name">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            placeholder="Enter full name"
                                            required
                                            onChange={onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="email">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Enter email"
                                            required
                                            onChange={onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="password">Password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            className="form-control"
                                            placeholder="Enter password"
                                            required
                                            onChange={onChange}
                                        />
                                    </div>
                                    <div className="form-group mb-4">
                                        <label for="password2">Confirm Password</label>
                                        <input
                                            type="password"
                                            name="password2"
                                            className="form-control"
                                            placeholder="Confirm password"
                                            required
                                            onChange={onChange}
                                        />
                                    </div>

                                    <div className="card card-body mb-3">
                                        <h5>User Role</h5>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="role"
                                                value="user"
                                                checked={role === 'user'}
                                                onClick={() => setRole('user')}
                                            />
                                            <label className="form-check-label">
                                                Regular User (Browse, Write reviews, etc)
											</label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="role"
                                                value="publisher"
                                                checked={role === 'publisher'}
                                                onClick={() => setRole('publisher')}
                                            />
                                            <label className="form-check-label">
                                                Bootcamp Publisher
											</label>
                                        </div>
                                    </div>
                                    <p className="text-danger">
                                        * You must be affiliated with the bootcamp in some way in
                                        order to add it to DevCamper.
									</p>
                                    <div className="form-group">
                                        <input
                                            type="submit"
                                            value="Register"
                                            className="btn btn-primary btn-block"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default register
