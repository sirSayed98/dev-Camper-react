/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from 'react'
import reviewContext from '../../context/review/reviewContext'
const manageReviews = () => {
    const ReviewContext = useContext(reviewContext);
    const { reviews, getUserReviews } = ReviewContext;

    useEffect(() => {
        getUserReviews();
    }, [])

    useEffect(() => {
        console.log(reviews);
    }, [reviews])
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
                                        (reviews !== null && reviews !== undefined) ? reviews.map(boot => {
                                            return (
                                                <tr>
                                                    <td>{boot.bootcamp.name}</td>
                                                    <td>{boot.rating}</td>
                                                    <td>
                                                        <a href="add-review.html" className="btn btn-secondary"><i className="fas fa-pencil-alt"></i></a>
                                                        <button className="btn btn-danger">
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
