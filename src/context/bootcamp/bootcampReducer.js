import {
    CREATE_BOOTCAMP,
    LOAD_BOOTCAMP,
    GET_ALL_BOOTCAMPS
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

        default:
            return state;
    }
}