import {
    CREATE_COURSE,
    RESET,
    EDIT_COURSE,
    GET_COURSE
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
                create_successful: false,
                edit_successful: false,
                currentCourse:null
            }
        case EDIT_COURSE:
            console.log(action.payload)
            return {
                courses: state.courses.map(course =>
                    course._id === action.payload._id ? action.payload : course
                ),
                edit_successful: true
            }
        case GET_COURSE:
            return {
                ...state,
                currentCourse: action.payload

            }
        default:
            return state;
    }
}