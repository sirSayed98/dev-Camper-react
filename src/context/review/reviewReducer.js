import {
    ADD_REVIEW,
    USER_REVIEWS,
    DELETE_REVIEW,
    GET_SINGLE_REVIEW,
    RESET,
    EDIT_REVIEW
} from '../types';

export default (state, action) => {

    switch (action.type) {
        case ADD_REVIEW:
            return {
                ...state,
                create_successful: true
            };
        case USER_REVIEWS: return {
            ...state,
            user_reviews: action.payload
        };
        case RESET: return {
            ...state,
            create_successful: false,
            edit_successful: false
        };
        case DELETE_REVIEW: return {
            ...state,
            user_reviews: state.user_reviews.filter(
                review => review._id !== action.payload
            ),
        }
        case GET_SINGLE_REVIEW: return {
            ...state,
            review: action.payload
        }
        case EDIT_REVIEW: return {
            ...state,
            edit_successful: true
        }
        default:
            return state;
    }
}