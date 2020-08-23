/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import courseContext from '../../context/course/courseContext'


import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const editCourse = (props,match) => {

    const CourseContext = useContext(courseContext);
    const MySwal = withReactContent(Swal)

    const { editCourse, edit_successful, restFLags, currentCourse, getCourse } = CourseContext;
    const [course, setCourse] = useState({
        weeks: 0,
        tuition: 0,
        minimumSkill: "beginner",
        description: "no-description",
        scholarshipAvailable: false
    });

    // mounting
    useEffect(() => {
        getCourse(props.match.params.courseId);
    }, [])

    useEffect(() => {
        if (edit_successful) {
            editCourseDone();
            restFLags();
            props.history.push('/manage-courses');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [edit_successful])


    function editCourseDone() {
        MySwal.fire(
            `Course ${title} edited Successfully`,
            'Manage it now !',
            'success')
    }

    const { title, weeks, tuition, minimumSkill, description, scholarshipAvailable } = course;

    const onChange = e => setCourse({ ...course, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        editCourse({
            title,
            weeks,
            tuition,
            minimumSkill,
            description,
            scholarshipAvailable
        }, currentCourse.data._id)
    }
    const handleChecked= e => {
        setCourse({ ...course,[e.target.name]:e.target.checked})
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
                            {/* <h1 className="mb-2">{currentCourse.data.bootcamp.name ? currentCourse.data.bootcamp.name : "Bootcamp Name"}</h1> */}
                            <h1 className="mb-2">{currentCourse != null ? currentCourse.data.bootcamp.name : "Bootcamp Name"}  </h1>
                            <h3 className="text-primary mb-4">EDIT Course</h3>
                            <form onSubmit={onSubmit}>
                                <div className="form-group">
                                    <label>Course Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        className="form-control"
                                        onChange={onChange}
                                        required
                                        placeholder={currentCourse != null ? currentCourse.data.title : "title"}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>weeks</label>
                                    <input
                                        type="number"
                                        name="weeks"
                                        className="form-control"
                                        onChange={onChange}
                                        required
                                        placeholder={currentCourse != null ? currentCourse.data.weeks : 0}
                                    />
                                    <small className="form-text text-muted">Enter number of weeks course lasts</small>
                                </div>
                                <div className="form-group">
                                    <label>Course Tuition</label>
                                    <input
                                        type="number"
                                        name="tuition"
                                        
                                        className="form-control"
                                        onChange={onChange}
                                        required
                                        placeholder={currentCourse != null ? currentCourse.data.tuition : 0}
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
                                        
                                        maxlength="500"
                                        onChange={onChange}
                                        required
                                        placeholder={currentCourse != null ? currentCourse.data.description : "description"}
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
                                        onChange={handleChecked}
                                    />
                                    <label className="form-check-label" htmlFor="scholarshipAvailable">
                                        Scholarship Available
                                </label>
                                </div>
                                <div className="form-group mt-4">
                                    <input
                                        type="submit"
                                        value="Edit Course"
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

export default editCourse
