import {
    GET_TYPES,
    PENDING_TYPES
} from '../actions/TypeActions';


// INITIALIZE STATE

const initialState = {
    types: [],
    fetching_types: true
};


// REDUCER

export const TypeReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_TYPES:
            return {
                ...state,
                types: action.payload,
                fetching_types: false
            };
        case PENDING_TYPES:
            return {
                ...state,
                fetching_types: true
            };
        default:
            return state;
    }
};