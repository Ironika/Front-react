import {
    GET_PRODUCTS,
    PENDING_PRODUCTS,
    GET_PRODUCT,
    PENDING_PRODUCT
} from '../actions/ShopActions';


// INITIALIZE STATE

const initialState = {
    products: [],
    fetching_products: true,
    product: {},
    fetching_product: true,
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
        default:
            return state;
    }
};