/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom"
import bootcampContext from '../../context/bootcamp/bootcampContext'
const manageBootcamp = () => {
    const BootcampContext = useContext(bootcampContext);

    const { bootcamps, loadBootcamp } = BootcampContext;

    useEffect(() => {
        if (bootcamps == null) {
            loadBootcamp();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bootcamps])

    return (
        <section className="container mt-5">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <div className="card bg-white mt-5 py-2 px-4">
                        <div className="card-body ">
                            <h1 className="mb-4">Manage Bootcamp</h1>
                            <div className="card mb-3">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src="img/image_1.jpg" className="card-img" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <Link to={`/bootcamp/${bootcamps.data.id}`}>{bootcamps.data.name ? bootcamps.data.name : "BootCamp"} Bootcamp
													<span className="float-right badge badge-success">{bootcamps.data.averageRating ? bootcamps.data.averageRating : "Not rated yet"}</span></Link>
                                            </h5>
                                            <span className="badge badge-dark mb-2">{bootcamps.data.city ? bootcamps.data.city : " "},{bootcamps.data.country ? bootcamps.data.country : "EG"}</span>
                                            <p className="card-text">
                                                {
                                                    bootcamps.data.careers ? bootcamps.data.careers.join('-') : "other careers"
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <form className="mb-4">
                                <div className="form-group">
                                    <div className="custom-file">
                                        <input
                                            type="file"
                                            name="photo"
                                            className="custom-file-input"
                                            id="photo"
                                        />
                                        <label className="custom-file-label" htmlFor="photo">Add Bootcamp Image</label>
                                    </div>
                                </div>
                                <input type="submit" className="btn btn-light btn-block" value="Upload Image" />
                            </form>
                            <Link to="/edit-bootcamp" className="btn btn-primary btn-block">Edit Bootcamp Details</Link>
                            {(bootcamps.data.courses.lenght !== 0) ? <Link to={{
                                pathname:'/manage-courses',
                                data:{bootcamps}
                            }}  className="btn btn-secondary btn-block">Manage Courses</Link> : null}
                            <Link to="/add-course" className="btn btn-secondary btn-block">Add Course</Link>
                            <Link to="/remove-bootcamp" className="btn btn-danger btn-block">Remove Bootcamp</Link>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default manageBootcamp
