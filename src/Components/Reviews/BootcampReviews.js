/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react'
import bootcampContext from '../../context/bootcamp/bootcampContext'
import { Link } from 'react-router-dom'
const BootcampReviews = (props) => {
    const BootcampContext = useContext(bootcampContext);
    const { bootcamp_reviews, getBootcampReviews } = BootcampContext;

    useEffect(() => {
        getBootcampReviews(props.match.params.bootcampId);
        // bootcamp_reviews contain all data about user and bootcamp
    }, [])

    return (
        <>
            <section className="bootcamp mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 mt-5">
                            <Link
                                to={`/bootcamp/${props.match.params.bootcampId}`}
                                className="btn btn-secondary my-3"
                            ><i className="fas fa-chevron-left"></i> Bootcamp Info</Link>

                            <h1 className="mb-4">{(bootcamp_reviews !== null&&bootcamp_reviews.length !== 0) ? bootcamp_reviews[0].bootcamp.name : null}</h1>
                            {/* <!-- Reviews --> */}
                            {(bootcamp_reviews !== null&&bootcamp_reviews.length !== 0) ? bootcamp_reviews.map(el => {
                                return (<div className="card mb-3">
                                    <h5 className="card-header bg-dark text-white">{el.title}</h5>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Rating: <span className="text-success text-capitalize">{el.rating}</span>
                                        </h5>
                                        <p className="card-text">
                                            {el.text}
                                        </p>
                                        <p className="text-muted">Writtern By {el.user.name}</p>
                                    </div>
                                </div>)
                            }) : <h1> No Reviews available for this bootcamp </h1>}
                        </div>

                        <div className="col-md-4 mt-5">

                            <h1 className="text-center my-4">
                                <span
                                    className="badge badge-secondary badge-success rounded-circle p-3">{(bootcamp_reviews !== null&&bootcamp_reviews.length !== 0) ? bootcamp_reviews[0].bootcamp.averageRating : 0}</span>
							Rating
						</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BootcampReviews
