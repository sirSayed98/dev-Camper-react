import {
    CREATE_BOOTCAMP
} from '../types';

export default (state, action) => {

    switch (action.type) {
        case CREATE_BOOTCAMP:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                Bootcamps: action.payload
            };
        default:
            return state;
    }
}