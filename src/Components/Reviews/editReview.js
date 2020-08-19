/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from 'react'
import bootcampContext from '../../context/bootcamp/bootcampContext'
import reviewContext from '../../context/review/reviewContext'
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import authContext from '../../context/auth/authContext'
const editReview = (props) => {

    
    const ReviewContext = useContext(reviewContext);
    const AuthContext = useContext(authContext);


    const { EditReview, getSingleReview, resetFlags, review, edit_successful } = ReviewContext;
    const MySwal = withReactContent(Swal)
    const [newReview, setReview] = useState({
        title: '',
        text: '',
        rating: 10,
    });
    const { title, text, rating } = newReview;
    const onChange = e => setReview({ ...newReview, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        EditReview({
            title,
            text,
            rating
        }, props.match.params.reviewId)
    }

    useEffect(() => {
        if (AuthContext.user === null)
            AuthContext.loadUser();
        getSingleReview(props.match.params.reviewId);
    }, [])
    useEffect(() => {
        if (review !== null)
            setReview(review);

    }, [review])
    useEffect(() => {
        if (edit_successful) {
            editReviewDone();
            resetFlags();
            props.history.push('/manage-reviews')
        }
    }, [edit_successful])
    function editReviewDone() {
        MySwal.fire(
            `Your review for ${review.bootcamp.name} edited Successfully`,
            'Watch your reviews now!',
            'success')
    }

    return (
        <>
            <section className="container mt-5">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <div className="card bg-white py-2 px-4 mt-5">
                            <div className="card-body">
                                <Link to={`/manage-reviews`} className="btn btn-link text-secondary my-3"><i className="fas fa-chevron-left"></i> Manage Reviews</Link>
                                <h1 className="mb-2">{review ? review.bootcamp.name : "bootcamp name"}</h1>
                                <h3 className="text-primary mb-4">Edit your Review</h3>
                                <p>
                                    You must have attended and graduated this bootcamp to review it
							</p>
                                <form onSubmit={onSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="rating">Rating: <span className="text-primary">{rating}</span></label>
                                        <input
                                            type="range"
                                            className="custom-range"
                                            min="1"
                                            max="10"
                                            step="1"
                                            name="rating"
                                            value={rating}
                                            required
                                            onChange={onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="title"
                                            className="form-control"
                                            placeholder="Review title"
                                            required
                                            onChange={onChange}
                                            value={title}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <textarea
                                            name="text"
                                            rows="10"
                                            className="form-control"
                                            placeholder="Your newReview"
                                            required
                                            onChange={onChange}
                                            value={text}
                                        ></textarea>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="submit"
                                            value="Submit Review"
                                            className="btn btn-dark btn-block"
                                        />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>            
        </>
    )
}

export default editReview
