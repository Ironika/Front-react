import {
    GET_ORDER,
    PENDING_ORDER
} from '../actions/OrderActions';


// INITIALIZE STATE

const initialState = {
    order: {},
    fetching_order: true
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
        case PENDING_ORDER:
            return {
                ...state,
                fetching_order: true
            };
        default:
            return state;
    }
};