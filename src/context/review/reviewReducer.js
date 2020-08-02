import {
    ADD_REVIEW,
    RESET
} from '../types';

export default (state, action) => {

    switch (action.type) {
        case ADD_REVIEW:
            return {
                ...state,
                create_successful: true
            };
        case RESET: return{
            ...state,
            create_successful: false
        }    
        default:
            return state;
    }
}