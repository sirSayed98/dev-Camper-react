/* eslint-disable no-unused-vars */
import React, { useReducer } from 'react';
import axios from 'axios';
import bootcampContext from './bootcampContext';
import bootcampReducer from './bootcampReducer';


import {
    CREATE_BOOTCAMP,
    LOAD_BOOTCAMP,
    GET_ALL_BOOTCAMPS,
    RESET,
    DELETE_BOOTCAMP,
    GET_BOOTCAMP_REVIEWS,
    FILTER_BY_BUDGET_RATE,
    FILTER_BY_LOCATION,
    BASE_URL
} from '../types';


const BootCampState = props => {
    const initialState = {
        bootcamps: null,
        allBootcamps: [],
        bootcamp_reviews: null,
        searchBootcamp: null,
        bootCamp:null
    };
    const [state, dispatch] = useReducer(bootcampReducer, initialState);


    const Create = async formData => {
        const config = {
            headers: {
                method: 'Post',
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post(`${BASE_URL}/api/v1/bootcamps`, formData, config);
            dispatch({
                type: CREATE_BOOTCAMP,
                payload: res.data
            });
        } catch (error) {
            console.log(error.response.data)
        }
    }

    const loadBootcamp = async () => {
        try {

            const res = await axios.get(`${BASE_URL}/api/v1/bootcamps/myBootcamp`);
            dispatch({
                type: LOAD_BOOTCAMP,
                payload: res.data
            });
        } catch (error) {
            console.log(error.response.data)
        }
    }
    const getALLBootcamps = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/api/v1/bootcamps`);
            dispatch({
                type: GET_ALL_BOOTCAMPS,
                payload: Object.values(res.data.data)
            });
        } catch (error) {
            console.log(error.response)
        }
    }
    const fetchBootcamp = async (id) => {
        try {
            const res = await axios.get(`${BASE_URL}/api/v1/bootcamps/${id}`);
            console.log(res.data.data)
            dispatch({
                type: LOAD_BOOTCAMP,
                payload: res.data
            });
        } catch (error) {
            alert('not here')
            console.log(error)
        }
    }
    const getBootcampReviews = async (id) => {
        try {
            const res = await axios.get(`${BASE_URL}/api/v1/bootcamps/${id}/reviews`);
            dispatch({
                type: GET_BOOTCAMP_REVIEWS,
                payload: Object.values(res.data.data)
            });
        } catch (error) {
            console.log(error.response)
        }
    }

    const deleteBootcamp = async (bootcampId) => {
        try {
            await axios.delete(`${BASE_URL}/api/v1/bootcamps/${bootcampId}`)
            dispatch({
                type: DELETE_BOOTCAMP,
                payload: bootcampId
            });
        } catch (error) {
            console.log(error.response.data);
        }
    }
    const resetFlags = () => {
        dispatch({
            type: RESET
        })
    }
    const Filter = async (Rate,Budget) => {
            dispatch({
                type: FILTER_BY_BUDGET_RATE,
                Rate,
                Budget
            });
        
    }
    const FilterLocation = async (Zipcode,Distance) => {
       
        try {
            const res = await axios.get(`${BASE_URL}/api/v1/bootcamps/radius/${Zipcode}/${Distance}`);
            dispatch({
                type: FILTER_BY_LOCATION,
                payload: Object.values(res.data.data)
            });

        } catch (error) {
            console.log(error.response)
        }
    }

    return (
        <bootcampContext.Provider
            value={{
                bootcamps: state.bootcamps,
                allBootcamps: state.allBootcamps,
                bootcamp_reviews: state.bootcamp_reviews,
                searchBootcamp: state.searchBootcamp,
                bootCamp:state.bootCamp,
                FilterLocation,
                Create,
                loadBootcamp,
                fetchBootcamp,
                getALLBootcamps,
                resetFlags,
                deleteBootcamp,
                getBootcampReviews,
                Filter
            }}
        >
            {props.children}
        </bootcampContext.Provider>
    );
};
export default BootCampState;