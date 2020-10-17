import {
    CREATE_BOOTCAMP,
    LOAD_BOOTCAMP,
    GET_ALL_BOOTCAMPS,
    RESET,
    DELETE_BOOTCAMP,
    GET_BOOTCAMP_REVIEWS,
    FILTER_BY_BUDGET_RATE,
    FILTER_BY_LOCATION
} from '../types';

export default (state, action) => {

    switch (action.type) {
        case CREATE_BOOTCAMP:
            return {
                ...state,
                bootcamps: action.payload
            };
        case LOAD_BOOTCAMP: return {
            ...state,
            bootCamp: action.payload
        };
        case GET_ALL_BOOTCAMPS: return {
            ...state,
            allBootcamps: action.payload
        }
        case RESET:
            return {
                ...state,
                allBootcamps: [],
                bootcamps: null,
                searchBootcamp: null
            }
        case DELETE_BOOTCAMP:
            return {
                bootcamps: null,
                allBootcamps: state.allBootcamps.filter(
                    bootcamp => bootcamp._id !== action.payload
                )
            }
        case GET_BOOTCAMP_REVIEWS: return {
            ...state,
            bootcamp_reviews: action.payload
        }
        case FILTER_BY_BUDGET_RATE: return {
            ...state,
            searchBootcamp: state.allBootcamps.filter(
                bootcamp => bootcamp.averageRating >= action.Rate && bootcamp.averageCost >= action.Budget
            )
        }
        case FILTER_BY_LOCATION: return {
            ...state,
            searchBootcamp: action.payload
        }
        default:
            return state;
    }
}