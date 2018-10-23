import {
    GET_ORDER,
    PENDING_ORDER,
    POST_ORDER,
    GET_USER_ORDERS,
    PENDING_USER_ORDERS
} from '../actions/OrderActions';


// INITIALIZE STATE

const initialState = {
    order: {},
    posted_order: {},
    user_orders: [],
    fetching_order: true,
    fetching_user_orders: true
};


// REDUCER

export const OrderReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_ORDER:
            return {
                ...state,
                order: action.payload,
                fetching_order: false
            };
        case POST_ORDER:
            return {
                ...state,
                posted_order: action.payload
            };
        case GET_USER_ORDERS:
            return {
                ...state,
                user_orders: action.payload,
                fetching_user_orders: false
            };
        case PENDING_ORDER:
            return {
                ...state,
                fetching_order: true
            };
        case PENDING_USER_ORDERS:
            return {
                ...state,
                fetching_user_orders: true
            };
        default:
            return state;
    }
};