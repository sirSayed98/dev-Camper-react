/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import bootcampContext from '../../context/bootcamp/bootcampContext'
import courseContext from '../../context/course/courseContext'


import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const addCourse = (props) => {
    const BootcampContext = useContext(bootcampContext);
    const CourseContext = useContext(courseContext);
    const MySwal = withReactContent(Swal)
    const { bootcamps, loadBootcamp } = BootcampContext;
    const { createCourse, create_successful,restFLags } = CourseContext;
    const [course, setCourse] = useState({
        title: '',
        weeks: '',
        tuition: '',
        minimumSkill: 'beginner',
        description: '',
        scholarshipAvailable: false,
    });
    useEffect(() => {
        if (bootcamps == null) {
            loadBootcamp();
        }
        if (create_successful) {
            createCourseDone();
            restFLags();
            props.history.push('/manage-courses');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [create_successful, bootcamps])

    function createCourseDone() {
        MySwal.fire(
            `Course ${title} created Successfully`,
            'Manage it now !',
            'success')
    }

    const { title, weeks, tuition, minimumSkill, description, scholarshipAvailable } = course;
    const onChange = e => setCourse({ ...course, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        createCourse({
            title,
            weeks,
            tuition,
            minimumSkill,
            description,
            scholarshipAvailable
        },bootcamps.data._id)
    }

    return (
        <section className="container mt-5">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <div className="card bg-white py-2 px-4 mt-5">
                        <div className="card-body">
                            <Link
                                to="/manage-courses"
                                className="btn btn-link text-secondary my-3"><i className="fas fa-chevron-left"></i> Manage Courses</Link>
                            <h1 className="mb-2">{bootcamps.data.name ? bootcamps.data.name : "Bootcamp Name"}</h1>
                            <h3 className="text-primary mb-4">Add Course</h3>
                            <form onSubmit={onSubmit}>
                                <div className="form-group">
                                    <label>Course Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        className="form-control"
                                        placeholder="Title"
                                        onChange={onChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>weeks</label>
                                    <input
                                        type="number"
                                        name="weeks"
                                        placeholder="weeks"
                                        className="form-control"
                                        onChange={onChange}
                                        required
                                    />
                                    <small className="form-text text-muted">Enter number of weeks course lasts</small>
                                </div>
                                <div className="form-group">
                                    <label>Course Tuition</label>
                                    <input
                                        type="number"
                                        name="tuition"
                                        placeholder="Tuition"
                                        className="form-control"
                                        onChange={onChange}
                                        required
                                    />
                                    <small className="form-text text-muted">USD Currency</small>
                                </div>
                                <div className="form-group">
                                    <label>Minimum Skill Required</label>
                                    <select name="minimumSkill" className="form-control" onChange={onChange} value={(course.minimumSkill) ? course.minimumSkill : "beginner"}>
                                        <option value="beginner" >Beginner (Any)</option>
                                        <option value="intermediate">Intermediate</option>
                                        <option value="advanced">Advanced</option>
                                    </select>

                                </div>
                                <div className="form-group">
                                    <textarea
                                        name="description"
                                        rows="5"
                                        className="form-control"
                                        placeholder="Course description summary"
                                        maxlength="500"
                                        onChange={onChange}
                                        required
                                    ></textarea>
                                    <small className="form-text text-muted"
                                    >No more than 500 characters</small
                                    >
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="scholarshipAvailable"
                                        id="scholarshipAvailable"
                                        onChange={onChange}
                                    />
                                    <label className="form-check-label" htmlFor="scholarshipAvailable">
                                        Scholarship Available
                                </label>
                                    <p> {course.scholarshipAvailable}</p>
                                </div>
                                <div className="form-group mt-4">
                                    <input
                                        type="submit"
                                        value="Add Course"
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

export default addCourse
