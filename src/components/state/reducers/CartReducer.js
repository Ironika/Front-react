import {
    ADD_TO_CART,
} from '../actions/CartActions';


// INITIALIZE STATE

const initialState = {
    cart: [],
};


// REDUCER

export const CartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        default:
            return state;
    }
};