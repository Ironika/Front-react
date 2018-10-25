import {
    GET_PRODUCTS,
    PENDING_PRODUCTS,
    GET_PRODUCT,
    PENDING_PRODUCT,
    SET_FILTERS,
    GET_MATERIALS,
    GET_SIZES,
    GET_SHAPES,
    GET_COLLECTIONS,
    GET_COLORS,
    GET_STATES
} from '../actions/ShopActions';


// INITIALIZE STATE

const initialState = {
    products: [],
    fetching_products: true,
    product: {},
    fetching_product: true,
    filters: {},
    materials: [],
    sizes: [],
    shapes: [],
    collections: [],
    colors: [],
    states: []
};


// REDUCER

export const ShopReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                fetching_products: false
            };
        case PENDING_PRODUCTS:
            return {
                ...state,
                fetching_products: true
            };
        case GET_PRODUCT:
            return {
                ...state,
                product: action.payload,
                fetching_product: false
            };
        case PENDING_PRODUCT:
            return {
                ...state,
                fetching_product: true
            };
        case SET_FILTERS:
            return {
                ...state,
                filters: action.payload
            };
        case GET_MATERIALS:
            return {
                ...state,
                materials: action.payload,
            };
        case GET_SIZES:
            return {
                ...state,
                sizes: action.payload,
            };
        case GET_SHAPES:
            return {
                ...state,
                shapes: action.payload,
            };
        case GET_COLLECTIONS:
            return {
                ...state,
                collections: action.payload,
            };
        case GET_COLORS:
            return {
                ...state,
                colors: action.payload,
            };
        case GET_STATES:
            return {
                ...state,
                states: action.payload,
            };
        default:
            return state;
    }
};