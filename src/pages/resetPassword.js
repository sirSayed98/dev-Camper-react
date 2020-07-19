import React from 'react'
import { Link } from 'react-router-dom'
const resetPassword = () => {
    return (
        <section className="container mt-5">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <div className="card bg-white py-2 px-4 mt-5">
                        <div className="card-body">
                            <Link to="/login">Back to login</Link>
                            <h1 className="mb-2">Reset Password</h1>
                            <p>	Use this form to reset your password using the registered email address.</p>
                            <form>
                                <div className="form-group">
                                    <label>Enter Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
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
}

export default resetPassword
