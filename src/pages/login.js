import { Link } from 'react-router-dom'
import AuthContext from '../context/auth/authContext';
import React, { useContext, useEffect, useState } from 'react'
const login = (props) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const authContext = useContext(AuthContext);
    const { Login, error, isAuthenticated } = authContext;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (isAuthenticated)
            props.history.push('/');
        if (error === 'Invalid credentials') {
            console.log("Invalid credentials");
        }
        //eslint-disable-next-line
    }, [error, isAuthenticated, props.history])


    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const { email, password } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        Login({
            email, password
        }
        );

    }


    return (

        <section className="form mt-5" >
            <div className="container">
                <div className="row">
                    <div className="col-md-6 m-auto">
                        <div className="card bg-white p-4 mt-5">
                            <div className="card-body">
                                <h1><i className="fas fa-sign-in-alt"></i> Login</h1>
                                <p>
                                    Log in to list your bootcamp or rate, review and favorite
                                    bootcamps
								</p>
                                <form onSubmit={onSubmit}>
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
                                    <div className="form-group mb-4">
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
                                    <div className="form-group">
                                        <input
                                            type="submit"
                                            value="Login"
                                            className="btn btn-primary btn-block"
                                        />
                                    </div>
                                </form>
                                <p>	Forgot Password? <Link to="/reset-password">Reset Password</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default login

