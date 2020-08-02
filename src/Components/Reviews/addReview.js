/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from 'react'
import bootcampContext from '../../context/bootcamp/bootcampContext'
import reviewContext from '../../context/review/reviewContext'
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const addReview = ({ match }) => {
	const BootcampContext = useContext(bootcampContext);
	const ReviewContext = useContext(reviewContext);
	const { bootcamps, fetchBootcamp } = BootcampContext;
	const { AddReview, create_successful, resetFlags } = ReviewContext;
	const MySwal = withReactContent(Swal)
	const [review, setReview] = useState({
		title: '',
		text: '',
		rating: 10,
	});
	const { title, text, rating } = review;

	useEffect(() => {
		fetchBootcamp(match.params.bootcampId)
	}, [])

	useEffect(() => {
		if (create_successful) {
			createReviewDone();
			resetFlags();
		};

	}, [create_successful])

	const onChange = e => setReview({ ...review, [e.target.name]: e.target.value });
	const onSubmit = e => {
		e.preventDefault();
		AddReview({
			title,
			text,
			rating
		}, match.params.bootcampId)
	}

	function createReviewDone() {
		MySwal.fire(
			`Your review for ${bootcamps.data.name} created Successfully`,
			'Watch your reviews now !',
			'success')
	}

	return (
		<section className="container mt-5">
			<div className="row">
				<div className="col-md-8 m-auto">
					<div className="card bg-white py-2 px-4 mt-5">
						<div className="card-body">
							<Link to={`/bootcamp/${match.params.bootcampId}`} className="btn btn-link text-secondary my-3"><i className="fas fa-chevron-left"></i> Bootcamp Info</Link>
							<h1 className="mb-2">{bootcamps ? bootcamps.data.name : "bootcamp name"}</h1>
							<h3 className="text-primary mb-4">Write a Review</h3>
							<p>
								You must have attended and graduated this bootcamp to review
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
									/>
								</div>
								<div className="form-group">
									<textarea
										name="text"
										rows="10"
										className="form-control"
										placeholder="Your review"
										required
										onChange={onChange}
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

	)
}
export default addReview