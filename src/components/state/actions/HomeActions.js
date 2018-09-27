export const GET_HOME_BLOGS = 'GET_HOME_BLOGS';
export const PENDING_HOME_BLOGS = 'PENDING_HOME_BLOGS';
export const GET_HOME_PRODUCTS = 'GET_HOME_PRODUCTS';
export const PENDING_HOME_PRODUCTS = 'PENDING_HOME_PRODUCTS';

// ACTION GENERATORS

export const getHomeBlogsAction = (response) => ({
    type: GET_HOME_BLOGS,
    payload: response
});

export const pendingHomeBlogsAction = () => ({
    type: PENDING_HOME_BLOGS,
});

export const getHomeProductsAction = (response) => ({
    type: GET_HOME_PRODUCTS,
    payload: response
});

export const pendingHomeProductsAction = () => ({
    type: PENDING_HOME_PRODUCTS,
});