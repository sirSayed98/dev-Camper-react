import {
    ADD_REVIEW,
    USER_REVIEWS,
    DELETE_REVIEW,
    RESET
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
            create_successful: false
        };
        case DELETE_REVIEW: return {
            ...state,
            reviews: state.reviews.filter(
                review => review._id !== action.payload
            ),
        }
        default:
            return state;
    }
}