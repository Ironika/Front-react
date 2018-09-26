import {
    GET_BLOGS,
    GET_BLOG,
    GET_TAGS,
    GET_PRODUCTS,
    PENDING,
    PENDING_BLOG
} from '../actions/BlogActions';


// INITIALIZE STATE

const initialState = {
    blogs: [],
    tags: [],
    products: [],
    blog: {},
    fetching: true,
    fetching_blog: true
};


// REDUCER

export const BlogReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_BLOGS:
            return {
                ...state,
                blogs: action.payload,
                fetching_blog: false
            };
        case GET_BLOG:
            return {
                ...state,
                blog: action.payload,
                fetching_blog: false
            };
        case GET_TAGS:
            return {
                ...state,
                tags: action.payload,
                fetching: false
            };
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                fetching: false
            };
        case PENDING:
            return {
                ...state,
                fetching: true
            };
        case PENDING_BLOG:
            return {
                ...state,
                fetching_blog: true
            };
        default:
            return state;
    }
};