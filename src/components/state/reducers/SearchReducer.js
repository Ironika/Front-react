import {
    SEARCH,
    PENDING
} from '../actions/SearchActions';

// INITIALIZE STATE

const initialState = {
    search: [],
    fetching: true
};

// REDUCER

export const SearchReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEARCH:
            return {
                ...state,
                search: action.payload,
                fetching: false
            };
        case PENDING:
            return {
                ...state,
                fetching: true
            };
        default:
            return state;
    }
};