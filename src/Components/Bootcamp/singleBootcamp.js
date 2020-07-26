import React, { useContext, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom"
import bootcampContext from '../../context/bootcamp/bootcampContext'


const singleBootcamp = ({match}) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const BootcampContext = useContext(bootcampContext);
    const { bootcamps, fetchBootcamp } = BootcampContext;

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        if (bootcamps == null) {
            fetchBootcamp(match.params.bootcampId);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bootcamps])
    return (
        <section className="bootcamp mt-5">
            <div className="container">
                <div className="row">
                    {/* <!-- Main col --> */}
                    <div className="col-md-8 mt-5">
                        <h1>{(bootcamps.data.name) ? bootcamps.data.name : "Bootcamp name"}</h1>

                        {/* <!-- Description --> */}
                        <p>{(bootcamps.data.description) ? bootcamps.data.description : "Bootcamp Describtion"}</p>

                        {/* <!-- Avg cost --> */}
                        <p className="lead mb-4">Average Course Cost: <span className="text-primary">{(bootcamps.data.averageCost) ? bootcamps.data.averageCost : "0.0"}</span></p>
                        {/* <!-- Courses --> */}
                        <div className="card mb-3">
                            <h5 className="card-header bg-primary text-white">Full Stack Web Development</h5>
                            <div className="card-body">
                                <h5 className="card-title">Duration: 12 Weeks</h5>
                                <p className="card-text">In this course you will learn full stack web development, first learning all about the frontend with HTML/CSS/JS/Vue and then the backend with Node.js/Express/MongoDB</p>
                                <ul className="list-group mb-3">
                                    <li className="list-group-item">Cost: $10,000 USD</li>
                                    <li className="list-group-item">Skill Required: Intermediate</li>
                                    <li className="list-group-item">Scholarship Available: <i className="fas fa-times text-danger"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src="img/image_1.jpg" className="img-thumbnail" alt="" />
                        <h1 className="text-center my-4"><span className="badge badge-secondary badge-success rounded-circle p-3">{(bootcamps.data.averageRating) ? bootcamps.data.averageRating : "not Rated yet"}</span> Rating</h1>
                        <a href="reviews.html" className="btn btn-dark btn-block my-3"><i className="fas fa-comments"></i>  Read Reviews</a>
                        <a href="add-review.html" className="btn btn-light btn-block my-3"><i className="fas fa-pencil-alt"></i>  Write a Review</a>
                        <a href="#!" target="_blank" className="btn btn-secondary btn-block my-3"><i className="fas fa-globe"></i>  Visit Website</a>
                        <ul className="list-group list-group-flush mt-4">
                            <li className="list-group-item"><i className={(bootcamps.data.housing === true) ? "fas fa-check text-success" : "fas fa-check text-danger"}></i> Housing</li>
                            <li className="list-group-item"><i className={(bootcamps.data.jobAssistance === true) ? "fas fa-check text-success" : "fas fa-check text-danger"}></i> Job Assistance</li>
                            <li className="list-group-item"><i className={(bootcamps.data.jobGuarantee === true) ? "fas fa-check text-success" : "fas fa-check text-danger"}></i> Job Guarantee</li>
                            <li className="list-group-item"><i className={(bootcamps.data.acceptGi === true) ? "fas fa-check text-success" : "fas fa-check text-danger"}></i> Accepts GI Bill</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default singleBootcamp
