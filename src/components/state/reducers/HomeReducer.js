import {
    GET_HOME_BLOGS,
    PENDING_HOME_BLOGS,
    GET_HOME_PRODUCTS,
    PENDING_HOME_PRODUCTS,
    GET_HOME_COLLECTIONS,
    PENDING_HOME_COLLECTIONS,
    GET_HOME_SLIDES,
    PENDING_HOME_SLIDES
} from '../actions/HomeActions';


// INITIALIZE STATE

const initialState = {
    blogs: [],
    fetching_blogs: true,
    products: [],
    fetching_products: true,
    collections: [],
    fetching_collections: true,
    slides: [],
    fetching_slides: true
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
        case PENDING_HOME_BLOGS:
            return {
                ...state,
                fetching_blogs: true
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
        case GET_HOME_COLLECTIONS:
            return {
                ...state,
                collections: action.payload,
                fetching_collections: false
            };
        case PENDING_HOME_COLLECTIONS:
            return {
                ...state,
                fetching_collections: true
            };
        case GET_HOME_SLIDES:
            return {
                ...state,
                slides: action.payload,
                fetching_slides: false
            };
        case PENDING_HOME_SLIDES:
            return {
                ...state,
                fetching_slides: true
            };
        default:
            return state;
    }
};