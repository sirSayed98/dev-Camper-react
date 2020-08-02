import React, { useReducer } from 'react';
import axios from 'axios';
import reviewContext from './reviewContext';
import reviewReducer from './reviewReducer';


import {
  ADD_REVIEW,
  RESET
} from '../types';


const ReviewState = props => {
    const initialState = {
        reviews: [],
        review: null,
        create_successful:false
    };
    const [state, dispatch] = useReducer(reviewReducer, initialState);



    const AddReview = async (formData, bootcampID) => {
        const config = {
            headers: {
                method: 'Post',
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post(`http://localhost:5000/api/v1/bootcamps/${bootcampID}/reviews`, formData, config);
            dispatch({
                type: ADD_REVIEW,
                payload: res.data
            });
        } catch (error) {
            console.log(error.response.data)
        }
    }
    const resetFlags = () => {
        dispatch({
            type: RESET
        })
    }

    

    return (
        <reviewContext.Provider
            value={{
                reviews: state.reviews,
                review: state.review,
                create_successful: state.create_successful,
                AddReview,
                resetFlags
            }}
        >
            {props.children}
        </reviewContext.Provider>
    );
};
export default ReviewState;