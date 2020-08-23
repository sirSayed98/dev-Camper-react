/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import authContext from '../../context/auth/authContext'
const resetPassword = () => {
    const AuthContext = useContext(authContext);
    const { ForgetPassword, forgetPasswordMessage, restFLags } = AuthContext;
    const [email, setEmail] = useState('');
    const [hideDiv, setHideDiv] = useState(false);

    const onChange = e => setEmail(e.target.value);
    const onSubmit = e => {
        e.preventDefault();
        ForgetPassword(
            { email }
        )
        restFLags();
    }
    useEffect(() => {
        if (forgetPasswordMessage === "Email sent") {
            setHideDiv(true);
        }
    }, [forgetPasswordMessage])

    if (!hideDiv)
        return (
            <section className="container mt-5">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <div className="card bg-white py-2 px-4 mt-5">
                            <div className="card-body">
                                <Link to="/login">Back to login</Link>
                                <h1 className="mb-2">Reset Password</h1>
                                <p>	Use this form to reset your password using the registered email address.</p>
                                <form onSubmit={onSubmit}>
                                    <div className="form-group">
                                        <label>Enter Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control"
                                            onChange={onChange}
                                            placeholder="Email address"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="submit"
                                            value="Reset Password"
                                            className="btn btn-dark btn-block"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        )
    else {
        return (
            <>
                <div style={{ height: '200px' }}></div>
                <div className="mt-5">
                    <h1 className='mt-5 text-center'> Email Sent Successfully !</h1>
                    <h3 className="mt-5 text-center"> Check Your Email </h3>
                    <h5 className="mt-5 text-center">{email}</h5>
                </div>
            </>
        )
    }
}

export default resetPassword
