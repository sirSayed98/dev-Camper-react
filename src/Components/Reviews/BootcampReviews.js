/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react'
import bootcampContext from '../../context/bootcamp/bootcampContext'
import { Link} from'react-router-dom'
const BootcampReviews = (props) => {
    const BootcampContext = useContext(bootcampContext);
    const { bootcamp_reviews, getBootcampReviews, loadBootcamp, bootcamps } = BootcampContext;

    useEffect(() => {
        getBootcampReviews(props.match.params.bootcampId);
        loadBootcamp(props.match.params.bootcampId);
    }, [])

    return (
        <>
            <section className="bootcamp mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <Link
                               to={`bootcamp/props.match.params.bootcampId`}
                                target="_blank"
                                className="btn btn-secondary my-3"
                            ><i className="fas fa-chevron-left"></i> Bootcamp Info</Link>
                            
                            <h1 className="mb-4">DevWorks Bootcamp Reviews</h1>
                            {/* <!-- Reviews --> */}
                            <div className="card mb-3">
                                <h5 className="card-header bg-dark text-white">Fantastic Bootcamp</h5>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Rating: <span className="text-success">10</span>
                                    </h5>
                                    <p className="card-text">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Commodi similique mollitia, praesentium, animi harum officia
                                        dolores corporis ex tempore consequuntur dolorem ullam dolorum
                                        magnam corrupti quaerat tempora repudiandae! Similique,
                                        molestiae. Iste, blanditiis recusandae unde tenetur eius
                                        exercitationem rerum a fuga.
								</p>
                                    <p className="text-muted">Writtern By Kevin Smith</p>
                                </div>
                            </div>

                            <div className="card mb-3">
                                <h5 className="card-header bg-dark text-white">Learned a Lot</h5>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Rating: <span className="text-success">9</span>
                                    </h5>
                                    <p className="card-text">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                        Commodi similique mollitia, praesentium, animi harum officia
                                        dolores corporis ex tempore consequuntur dolorem ullam dolorum
                                        magnam corrupti quaerat tempora repudiandae! Similique,
                                        molestiae. Iste, blanditiis recusandae unde tenetur eius
                                        exercitationem rerum a fuga.
								</p>
                                    <p className="text-muted">Writtern By Jill Samson</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">

                            <h1 className="text-center my-4">
                                <span
                                    className="badge badge-secondary badge-success rounded-circle p-3"
                                >8.8</span
                                >
							Rating
						</h1>

                            <a href="add-review.html" className="btn btn-primary btn-block my-3"
                            ><i className="fas fa-pencil-alt"></i> Review This Bootcamp</a
                            >
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default BootcampReviews
