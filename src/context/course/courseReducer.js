import {
    CREATE_COURSE,
    RESET
} from '../types';

export default (state, action) => {

    switch (action.type) {
        case CREATE_COURSE:
            return {
                ...state,
                courses: state.courses.push(action.payload),
                create_successful: true
            };
        case RESET:
            return {
                ...state,
                create_successful: false
            }
        default:
            return state;
    }
}