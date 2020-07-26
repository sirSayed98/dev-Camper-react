/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'

const manageCourses = (props) => {
    let courses = props.location.data.bootcamps.data.courses;
    let Bootcamp = props.location.data.bootcamps.data;
    console.log(courses)
    console.log(Bootcamp)

    return (
        <div>
            hello
        </div>
       
    )
}

export default manageCourses
