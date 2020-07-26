import React, { useReducer } from 'react';
import axios from 'axios';
import courseContext from './courseContext';
import courseReducer from './courseReducer';


import {
 CREATE_COURSE,
 RESET
} from '../types';


const CourseState = props => {
    const initialState = {
        courses:[],
        create_successful:false
    };
    const [state, dispatch] = useReducer(courseReducer, initialState);

    //register user

    const createCourse = async (formData,bootcampID) => {
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
    const restFLags =()=>{
        dispatch({
            type: RESET
        });
    }



return (
    <courseContext.Provider
        value={{
            courses:state.courses,
            create_successful:state.create_successful,
            createCourse,
            restFLags
        }}
    >
        {props.children}
    </courseContext.Provider>
);
};
export default CourseState;