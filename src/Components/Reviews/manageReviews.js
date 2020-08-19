/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from 'react'
import reviewContext from '../../context/review/reviewContext'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import authContext from '../../context/auth/authContext'
import { Link } from 'react-router-dom'
const manageReviews = () => {
    const ReviewContext = useContext(reviewContext);
    const AuthContext = useContext(authContext);
    const { user_reviews, getUserReviews, deleteReview } = ReviewContext;
    const MySwal = withReactContent(Swal);

    useEffect(() => {
        if (AuthContext.user === null)
            AuthContext.loadUser();
        getUserReviews();
    }, [])

    function DeleteReview(reviewID, name) {
        MySwal.fire({
            title: `Do you want to delete review of ${name} bootcamp ? `,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                deleteReview(reviewID);
                MySwal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }
    return (
        <section className="container mt-5">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <div className="card bg-white py-2 px-4 mt-5">
                        <div className="card-body">
                            <h1 className="mb-4">Manage Reviews</h1>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Bootcamp</th>
                                        <th scope="col">Rating</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        (user_reviews !== null && user_reviews !== undefined) ? user_reviews.map(review => {
                                            return (
                                                <tr>
                                                    <td>{review.bootcamp.name}</td>
                                                    <td>{review.rating}</td>
                                                    <td>
                                                        <Link to={`/edit-review/${review._id}`} className="btn btn-secondary"><i className="fas fa-pencil-alt"></i></Link>
                                                        <button className="btn btn-danger" onClick={() => DeleteReview(review._id, review.bootcamp.name)}>
                                                            <i className="fas fa-times"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        }) : null
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default manageReviews
