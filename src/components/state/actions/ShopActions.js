export const PENDING_PRODUCTS = 'PENDING_PRODUCTS';
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const PENDING_PRODUCT = 'PENDING_PRODUCT';
export const GET_PRODUCT = 'GET_PRODUCT';
export const SET_FILTERS = 'SET_FILTERS';
export const GET_MATERIALS = 'GET_MATERIALS';
export const GET_SIZES = 'GET_SIZES';
export const GET_SHAPES = 'GET_SHAPES';
export const GET_COLLECTIONS = 'GET_COLLECTIONS';
export const GET_COLORS = 'GET_COLORS';
export const GET_STATES = 'GET_STATES';

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

export const getMaterialsAction = (response) => ({
    type: GET_MATERIALS,
    payload: response
});

export const getSizesAction = (response) => ({
    type: GET_SIZES,
    payload: response
});

export const getShapesAction = (response) => ({
    type: GET_SHAPES,
    payload: response
});

export const getCollectionsAction = (response) => ({
    type: GET_COLLECTIONS,
    payload: response
});

export const getColorsAction = (response) => ({
    type: GET_COLORS,
    payload: response
});

export const getStatesAction = (response) => ({
    type: GET_STATES,
    payload: response
});