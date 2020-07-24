import React, { useReducer } from 'react';
import axios from 'axios';
import bootcampContext from './bootcampContext';
import bootcampReducer from './bootcampReducer';


import {
 CREATE_BOOTCAMP,
 LOAD_BOOTCAMP
} from '../types';


const BootCampState = props => {
    const initialState = {
        bootcamps:null
    };
    const [state, dispatch] = useReducer(bootcampReducer, initialState);

    //register user

    const Create = async formData => {
        const config = {
            headers: {
                method: 'Post',
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post("http://localhost:5000/api/v1/bootcamps", formData, config);
            dispatch({
                type: CREATE_BOOTCAMP,
                payload: res.data
            });
        } catch (error) {
            console.log(error.response.data)
        }
    }
    
    const loadBootcamp = async ()=> {
        try {
            
            const res = await axios.get("http://localhost:5000/api/v1/bootcamps/myBootcamp");
            dispatch({
                type: LOAD_BOOTCAMP,
                payload: res.data
            });
        } catch (error) {
            console.log(error.response.data)
        }
    }
    const fetchBootcamp = async (id)=> {
        try {
            
            const res = await axios.get(`http://localhost:5000/api/v1/bootcamps/${id}`);
            dispatch({
                type: LOAD_BOOTCAMP,
                payload: res.data
            });
        } catch (error) {
            console.log(error.response.data)
        }
    }


return (
    <bootcampContext.Provider
        value={{
            bootcamps: state.bootcamps,
            Create,
            loadBootcamp,
            fetchBootcamp
        }}
    >
        {props.children}
    </bootcampContext.Provider>
);
};
export default BootCampState;