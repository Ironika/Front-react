import {
    GET_SEARCH,
    PENDING,
    SET_SEARCH
} from '../actions/SearchActions';

// INITIALIZE STATE

const initialState = {
    results: [],
    fetching: true,
    search: ''
};

// REDUCER

export const SearchReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SEARCH:
            return {
                ...state,
                results: action.payload,
                fetching: false
            };
        case PENDING:
            return {
                ...state,
                fetching: true
            };
        case SET_SEARCH:
            return {
                ...state,
                search: action.payload
            };
        default:
            return state;
    }
};