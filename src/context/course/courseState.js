import React, { useReducer } from 'react';
import axios from 'axios';
import courseContext from './courseContext';
import courseReducer from './courseReducer';


import {
    CREATE_COURSE,
    RESET,
    EDIT_COURSE,
    GET_COURSE,
    DELETE_COURSE
} from '../types';


const CourseState = props => {
    const initialState = {
        courses: [],
        create_successful: false,
        currentCourse: null,
        edit_successful: false
    };
    const [state, dispatch] = useReducer(courseReducer, initialState);



    const createCourse = async (formData, bootcampID) => {
        const config = {
            headers: {
                method: 'Post',
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post(`http://localhost:5000/api/v1/bootcamps/${bootcampID}/courses`, formData, config);
            dispatch({
                type: CREATE_COURSE,
                payload: res.data
            });
        } catch (error) {
            console.log(error.response.data)
        }
    }
    const restFLags = () => {
        dispatch({
            type: RESET
        });
    }

    const editCourse = async (formData, courseID) => {
        try {
            const res = await axios.put(`http://localhost:5000/api/v1/courses/${courseID}`, formData);
            dispatch({
                type: EDIT_COURSE,
                payload: res.data
            });
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const getCourse = async (courseID) => {

        try {
            const res = await axios.get(`http://localhost:5000/api/v1/courses/${courseID}`);
            dispatch({
                type: GET_COURSE,
                payload: res.data
            });
        } catch (error) {
            console.log(error.response.data)
        }
    }
    const deleteCourse = async (courseID) => {
        try {
             await axios.delete(`http://localhost:5000/api/v1/courses/${courseID}`);
            dispatch({
                type: DELETE_COURSE,
                payload: courseID
            });
        } catch (error) {
            console.log(error.response.data)
        }
    }
    return (
        <courseContext.Provider
            value={{
                courses: state.courses,
                create_successful: state.create_successful,
                createCourse,
                restFLags,
                editCourse,
                edit_successful: state.edit_successful,
                getCourse,
                deleteCourse,
                currentCourse: state.currentCourse
            }}
        >
            {props.children}
        </courseContext.Provider>
    );
};
export default CourseState;