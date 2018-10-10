export const PENDING_PRODUCTS = 'PENDING_PRODUCTS';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const PENDING_PRODUCT = 'PENDING_PRODUCT';
export const GET_PRODUCT = 'GET_PRODUCT';
export const SET_FILTERS = 'SET_FILTERS';

// ACTION GENERATORS

export const pendingProductsAction = () => ({
    type: PENDING_PRODUCTS,
});

export const getProductsAction = (response) => ({
    type: GET_PRODUCTS,
    payload: response
});

export const pendingProductAction = () => ({
    type: PENDING_PRODUCT,
});

export const getProductAction = (response) => ({
    type: GET_PRODUCT,
    payload: response
});

export const setFiltersAction = (response) => ({
    type: SET_FILTERS,
    payload: response
});