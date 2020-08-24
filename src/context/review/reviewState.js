import React, { useReducer } from 'react';
import axios from 'axios';
import reviewContext from './reviewContext';
import reviewReducer from './reviewReducer';


import {
    ADD_REVIEW,
    USER_REVIEWS,
    DELETE_REVIEW,
    RESET,
    EDIT_REVIEW,
    GET_SINGLE_REVIEW,
    BASE_URL
} from '../types';


const ReviewState = props => {
    const initialState = {
        user_reviews: [],
        review: null,
        create_successful: false,
        edit_successful:false
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
            const res = await axios.post(`${BASE_URL}/api/v1/bootcamps/${bootcampID}/reviews`, formData, config);
            dispatch({
                type: ADD_REVIEW,
                payload: res.data
            });
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const getUserReviews = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/api/v1/reviews/myreviews`);
            dispatch({
                type: USER_REVIEWS,
                payload: Object.values(res.data.data)
            });
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const deleteReview = async (reviewID) => {
        try {
            await axios.delete(`${BASE_URL}/api/v1/reviews/${reviewID}`);
            dispatch({
                type: DELETE_REVIEW,
                payload: reviewID
            });
        } catch (error) {
            console.log(error)
        }
    }
    const resetFlags = () => {
        dispatch({
            type: RESET
        })
    }
    const getSingleReview = async (reviewID) => {
        try {
           const res = await axios.get(`${BASE_URL}/api/v1/reviews/${reviewID}`);
            dispatch({
                type: GET_SINGLE_REVIEW,
                payload: res.data.data
            });
        } catch (error) {
            console.log(error)
        }
    }
    const EditReview =async(formData,reviewID)=>{
        try {
            const res = await axios.put(`${BASE_URL}/api/v1/reviews/${reviewID}`,formData);
             dispatch({
                 type: EDIT_REVIEW,
                 payload: res.data
             });
         } catch (error) {
             console.log(error)
         }

    }


    return (
        <reviewContext.Provider
            value={{
                user_reviews: state.user_reviews,
                review: state.review,
                create_successful: state.create_successful,
                edit_successful:state.edit_successful,
                AddReview,
                getUserReviews,
                deleteReview,
                resetFlags,
                getSingleReview,
                EditReview 
            }}
        >
            {props.children}
        </reviewContext.Provider>
    );
};
export default ReviewState;