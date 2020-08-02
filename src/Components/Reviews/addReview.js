/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from 'react'
import bootcampContext from '../../context/bootcamp/bootcampContext'
import reviewContext from '../../context/review/reviewContext'
const addReview = ({ match }) => {
	const BootcampContext = useContext(bootcampContext);
	const ReviewContext = useContext(reviewContext);
	const { bootcamps, fetchBootcamp } = BootcampContext
	const { AddReview, create_successful } = ReviewContext
	const [review, setReview] = useState({
		title: '',
		text: '',
		rating: 0,
	});
	const { title, text, rating } = review;

	useEffect(() => {
		fetchBootcamp(match.params.bootcampId)
	}, [])

	const onChange = e => setReview({ ...review, [e.target.name]: e.target.value });
	const onSubmit = e => {
		e.preventDefault();
		console.log(review)
		// AddReview({
		// 	title,
		// 	text,
		// 	rating
		// })
	}

	return (
		<section className="container mt-5">
			<div className="row">
				<div className="col-md-8 m-auto">
					<div className="card bg-white py-2 px-4 mt-5">
						<div className="card-body">
							<a href="bootcamp.html" className="btn btn-link text-secondary my-3"><i className="fas fa-chevron-left"></i> Bootcamp Info</a>
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