import {
    CREATE_BOOTCAMP,
    LOAD_BOOTCAMP
} from '../types';

export default (state, action) => {

    switch (action.type) {
        case CREATE_BOOTCAMP:
        case LOAD_BOOTCAMP:
            return {
                ...state,
                bootcamps: action.payload
            };

        default:
            return state;
    }
}