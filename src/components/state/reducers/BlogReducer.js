import {
    GET_BLOGS,
} from '../actions/BlogActions';


// INITIALIZE STATE

const initialState = {
    blogs: [],
};


// REDUCER

export const BlogReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_BLOGS:
            return {
                ...state,
                blogs: action.payload,
            };
        default:
            return state;
    }
};