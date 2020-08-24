/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from 'react'
// eslint-disable-next-line no-unused-vars

import bootcampContext from '../../context/bootcamp/bootcampContext'
import { Link } from "react-router-dom"
import AuthContext from '../../context/auth/authContext'
import ReviewContext from '../../context/review/reviewContext'
const singleBootcamp = ({ match }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const BootcampContext = useContext(bootcampContext);
    const authContext = useContext(AuthContext);
    const reviewContext = useContext(ReviewContext);
    const { bootcamps, fetchBootcamp } = BootcampContext;
    const { user } = authContext;
    const [ReviewButton, setReviewButton] = useState(true);



    //mounting
    useEffect(() => {
        fetchBootcamp(match.params.bootcampId);
        if (authContext.user === null)
            authContext.loadUser();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (localStorage.getItem('token'))
            reviewContext.getUserReviews();
    }, [])
    const UserReview = () => {
        reviewContext.user_reviews.forEach(rev => {
            if (rev.bootcamp.id === match.params.bootcampId) {
                setReviewButton(false);
            }
        });
    }
    useEffect(() => {
        if (reviewContext.user_reviews !== null) {
            UserReview();

        }
    }, [reviewContext.user_reviews])

    return (
        <section className="bootcamp mt-5">
            <div className="container">
                <div className="row">
                    {/* <!-- Main col --> */}
                    <div className="col-md-8 mt-5">
                        <h1>{(bootcamps !== null) ? bootcamps.data.name : "Bootcamp name"}</h1>

                        {/* <!-- Description --> */}
                        <p>{(bootcamps !== null) ? bootcamps.data.description : "Bootcamp Describtion"}</p>

                        {/* <!-- Avg cost --> */}
                        <p className="lead mb-4">Average Course Cost: <span className="text-primary">{(bootcamps !== null) ? bootcamps.data.averageCost : "0.0"}</span></p>
                        {/* <!-- Courses --> */}
                        {
                            (bootcamps !== null && bootcamps.data.courses.length !== 0) ? bootcamps.data.courses.map(course => {
                                return (<div className="card mb-3" key={course._id}>
                                    <h5 className="card-header bg-primary text-white">{course.title}</h5>
                                    <div className="card-body">
                                        <h5 className="card-title">Duration: {course.weeks} Weeks</h5>
                                        <p className="card-text">{course.description}</p>
                                        <ul className="list-group mb-3">
                                            <li className="list-group-item">Cost: {course.tuition} USD</li>
                                            <li className="list-group-item">Skill Required: {course.minimumSkill}</li>
                                            <li className="list-group-item">Scholarship Available: {course.scholarshipAvailable ? <i className="fas fa-times text-success"></i> : <i className="fas fa-times text-danger"></i>}</li>
                                        </ul>
                                    </div>
                                </div>)
                            }) : <h1>No courses existed</h1>

                        }
                    </div>

                    <div className="col-md-4 mt-5">
                        <img style={{ with: "200px", height: "200px" }} src={bootcamps ? `http://localhost:5000/uploads/${bootcamps.data.photo}` : 'http://localhost:5000/uploads/no-photo.jpg'} className="card-img" alt="..." />
                        <h1 className="text-center my-4"><span className="badge badge-secondary badge-success rounded-circle p-3">{(bootcamps !== null) ? bootcamps.data.averageRating : "not Rated yet"}</span> Rating</h1>
                        <Link to={`/bootcamp/${match.params.bootcampId}/reviews`} className="btn btn-dark btn-block my-3"><i className="fas fa-comments"></i>  Read Reviews</Link>
                        {user && user.data.role === 'user' && ReviewButton ? <Link to={`/add-Review/${match.params.bootcampId}`} className="btn btn-light btn-block my-3"><i className="fas fa-pencil-alt"></i>  Write a Review</Link>
                            : null}
                        <a href={bootcamps ? bootcamps.data.website : "/!"} className="btn btn-secondary btn-block my-3"><i className="fas fa-globe"></i>  Visit Website</a>
                        <ul className="list-group list-group-flush mt-4">
                            <li className="list-group-item"><i className={(bootcamps !== null) ? `fas fa-check ${bootcamps.data.housing ? "text-success" : "text-danger"}` : null}></i> Housing</li>
                            <li className="list-group-item"><i className={(bootcamps !== null) ? `fas fa-check ${bootcamps.data.jobAssistance ? "text-success" : "text-danger"}` : null}></i> Job Assistance</li>
                            <li className="list-group-item"><i className={(bootcamps !== null) ? `fas fa-check ${bootcamps.data.jobGuarantee ? "text-success" : "text-danger"}` : null}></i> Job Guarantee</li>
                            <li className="list-group-item"><i className={(bootcamps !== null) ? `fas fa-check ${bootcamps.data.acceptGi ? "text-success" : "text-danger"}` : null}></i> Accepts GI Bill</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default singleBootcamp
