import {
    ADD_REVIEW
} from '../types';

export default (state, action) => {

    switch (action.type) {
        case ADD_REVIEW:
            return {
                ...state,
                create_successful: true
            };
        default:
            return state;
    }
}