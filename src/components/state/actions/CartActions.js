export const ADD_TO_CART = 'ADD_TO_CART';
export const EDIT_CART = 'EDIT_CART';

// ACTION GENERATORS

export const addToCartAction = (response) => ({
    type: ADD_TO_CART,
    payload: response
});

export const editCartAction = (response) => ({
    type: EDIT_CART,
    payload: response
});