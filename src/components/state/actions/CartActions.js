export const ADD_TO_CART = 'ADD_TO_CART';

// ACTION GENERATORS

export const addToCartAction = (response) => ({
    type: ADD_TO_CART,
    payload: response
});

