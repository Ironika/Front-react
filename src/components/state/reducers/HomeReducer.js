import {
    GET_HOME_BLOGS,
    GET_HOME_PRODUCTS,
    PENDING_HOME_PRODUCTS,
    PENDING_HOME_BLOGS
} from '../actions/HomeActions';


// INITIALIZE STATE

const initialState = {
    blogs: [],
    products: [],
    fetching_products: true,
    fetching_blogs: true
};


// REDUCER

export const HomeReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_HOME_BLOGS:
            return {
                ...state,
                blogs: action.payload,
                fetching_blogs: false
            };
        case GET_HOME_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                fetching_products: false
            };
        case PENDING_HOME_PRODUCTS:
            return {
                ...state,
                fetching_products: true
            };
        case PENDING_HOME_BLOGS:
            return {
                ...state,
                fetching_blogs: true
            };
        default:
            return state;
    }
};