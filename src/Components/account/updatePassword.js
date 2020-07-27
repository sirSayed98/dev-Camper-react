/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import authContext from '../../context/auth/authContext'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const updatePassword = (props) => {
    const AuthContext = useContext(authContext);
    const { UpdatePassword, error, restFLags, edit_successful } = AuthContext;
    const MySwal = withReactContent(Swal);
    const [Password, setPassword] = useState({
        currentPassword: " ",
        newPassword: " ",
        confirmPassword: " "

    });
    const { newPassword, currentPassword, confirmPassword } = Password;
    useEffect(() => {
        console.log("error => ",error);
        if (error !== null) {
            errorM(error.error);
            restFLags();
        }
        if (edit_successful) {
            changePasswordDone();
            restFLags();
        }
    }, [error, edit_successful])

    const onChange = e => setPassword({ ...Password, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (newPassword !== confirmPassword)
            errorM('New Password and Confirm Password don\'t match');

        else if (newPassword === confirmPassword === currentPassword)
            errorM('Try new password')
        else {
            UpdatePassword({
                currentPassword,
                newPassword
            })
        }
    }
    function errorM(msg) {
        MySwal.fire({
            icon: 'error',
            title: 'Oops...',
            text: msg,
        })
    }
    function changePasswordDone() {
        MySwal.fire(
            'Edit Successful!',
            `Your password changed successfully`,
            'success'
        );
        props.history.push('/');
    }
    return (
        <section className="container mt-5">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <div className="card bg-white py-2 px-4 mt-5">
                        <div className="card-body">
                            <h1 className="mb-2">Update Password</h1>
                            <form onSubmit={onSubmit}>
                                <div className="form-group">
                                    <label>Current Password</label>
                                    <input
                                        type="password"
                                        name="currentPassword"
                                        className="form-control"
                                        placeholder="Current Password"
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>New Password</label>
                                    <input
                                        type="password"
                                        name="newPassword"
                                        className="form-control"
                                        placeholder="New Password"
                                        onChange={onChange}
                                        minLength="8"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Confirm New Password</label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        className="form-control"
                                        placeholder="Confirm New Password"
                                        onChange={onChange}
                                        minLength="8"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="submit"
                                        value="Update Password"
                                        className="btn btn-dark btn-block"
                                    />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default updatePassword
