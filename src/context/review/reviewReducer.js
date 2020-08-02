import {
    ADD_REVIEW,
    USER_REVIEWS,
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
            reviews: action.payload
        };
        case RESET: return {
            ...state,
            create_successful: false
        };
        default:
            return state;
    }
}