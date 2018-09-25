import {
    GET_BLOGS,
    GET_BLOG,
    GET_TAGS,
    PENDING
} from '../actions/BlogActions';


// INITIALIZE STATE

const initialState = {
    blogs: [],
    blog: {},
    tags: [],
    fetching: true
};


// REDUCER

export const BlogReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_BLOGS:
            return {
                ...state,
                blogs: action.payload,
                fetching: false
            };
        case GET_BLOG:
            return {
                ...state,
                blog: action.payload,
                fetching: false
            };
        case GET_TAGS:
            return {
                ...state,
                tags: action.payload,
                fetching: false
            };
        case PENDING:
            return {
                ...state,
                blog: {},
                fetching: true
            };
        default:
            return state;
    }
};