import {
    CREATE_BOOTCAMP,
    LOAD_BOOTCAMP,
    GET_ALL_BOOTCAMPS,
    RESET,
    DELETE_BOOTCAMP
} from '../types';

export default (state, action) => {

    switch (action.type) {
        case CREATE_BOOTCAMP:
        case LOAD_BOOTCAMP:
            return {
                ...state,
                bootcamps: action.payload
            };
        case GET_ALL_BOOTCAMPS: return {
            ...state,
            allBootcamps: action.payload
        }
        case RESET:
            return {
                ...state,
                allBootcamps: [],
                bootcamps: null

            }
        case DELETE_BOOTCAMP:
            return {
                bootcamps: null,
                allBootcamps: state.allBootcamps.filter(
                    bootcamp => bootcamp._id !== action.payload
                )
            }
        default:
            return state;
    }
}