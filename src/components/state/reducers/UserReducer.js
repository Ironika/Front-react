import {
    LOGIN,
    LOGOUT,
    REGISTER,
    PENDING
} from '../actions/UserActions';


// INITIALIZE STATE

const initialState = {
    user: {},
    fetching: false
};


// REDUCER

export const UserReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload,
                fetching: false
            };
        case REGISTER:
            return {
                ...state,
                user: action.payload,
                fetching: false
            };
        case LOGOUT:
            return {
                ...state,
                user: {},
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