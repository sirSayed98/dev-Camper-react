import React, { useReducer } from 'react';
import axios from 'axios';
import bootcampContext from './bootcampContext';
import bootcampReducer from './bootcampReducer';


import {
    CREATE_BOOTCAMP,
    LOAD_BOOTCAMP,
    GET_ALL_BOOTCAMPS,
    RESET
} from '../types';


const BootCampState = props => {
    const initialState = {
        bootcamps: null,
        allBootcamps: []
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
            const res = await axios.post("/api/v1/bootcamps", formData, config);
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

            const res = await axios.get("/api/v1/bootcamps/myBootcamp");
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
            const res = await axios.get("/api/v1/bootcamps");
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

            const res = await axios.get(`/api/v1/bootcamps/${id}`);
            dispatch({
                type: LOAD_BOOTCAMP,
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
        <bootcampContext.Provider
            value={{
                bootcamps: state.bootcamps,
                allBootcamps: state.allBootcamps,
                Create,
                loadBootcamp,
                fetchBootcamp,
                getALLBootcamps,
                resetFlags 
            }}
        >
            {props.children}
        </bootcampContext.Provider>
    );
};
export default BootCampState;