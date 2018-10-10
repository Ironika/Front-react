import {
    GET_PRODUCTS,
    PENDING_PRODUCTS,
    GET_PRODUCT,
    PENDING_PRODUCT,
    SET_FILTERS
} from '../actions/ShopActions';


// INITIALIZE STATE

const initialState = {
    products: [],
    fetching_products: true,
    product: {},
    fetching_product: true,
    filters: {}
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
        default:
            return state;
    }
};