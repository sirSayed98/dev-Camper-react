/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useContext } from 'react'
import { Link } from "react-router-dom"
import bootcampContext from '../../context/bootcamp/bootcampContext'
const manageCourses = (props) => {
    const BootcampContext = useContext(bootcampContext);
    const { bootcamps, loadBootcamp } = BootcampContext;
    useEffect(() => {
        if (bootcamps == null) {
            loadBootcamp();

        }
        console.log(bootcamps);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bootcamps])

    //let courses = props.location.data.bootcamps.data.courses;
    //let Bootcamp = props.location.data.bootcamps.data;

    return (
        <section className="container mt-5">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <div className="card bg-white py-2 px-4">
                        <div className="card-body">
                            <Link
                                to="/manage-bootcamp"
                                className="btn btn-link text-secondary my-3"
                            ><i className="fas fa-chevron-left"></i> Manage Bootcamp</Link>
                            <h1 className="mb-4">Manage Courses</h1>
                            <div className="card mb-3">
                                <div className="row no-gutters">
                                    <div className="col-md-4">
                                        <img src="img/image_1.jpg" className="card-img" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                <Link to={`/bootcamp/${bootcamps.id}`}>{bootcamps.data.name}
                                                    <span className="float-right badge badge-success">{bootcamps.data.averageRating ? bootcamps.data.averageRating : "not Rated"}</span
                                                    ></Link>
                                            </h5>
                                            <span className="badge badge-dark mb-2">{(bootcamps.data.city) ? bootcamps.data.city : "city"}, {(bootcamps.data.country) ? bootcamps.data.country : "EG"}</span>
                                            <p className="card-text">
                                                {
                                                    bootcamps.data.careers ? bootcamps.data.careers.join(' - ') : "other careers"
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Link to="/add-course" className="btn btn-primary btn-block mb-4">Add Bootcamp Course</Link>
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">Title</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        bootcamps ? bootcamps.data.courses.map((course) => {
                                            return (
                                                <tr>
                                                    <td>{course.title}</td>
                                                    <td className="float-right">
                                                        <Link to={`/edit-course/${course._id}`} className="btn btn-secondary"><i className="fas fa-pencil-alt"> Edit</i></Link>
                                                        <Link to={`/delete-course/${course._id}`} className="btn btn-danger">
                                                            <i className="fas fa-times"> Delete</i>
                                                        </Link>
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

export default manageCourses
