export const GET_HOME_BLOGS = 'GET_HOME_BLOGS';
export const PENDING_HOME_BLOGS = 'PENDING_HOME_BLOGS';
export const GET_HOME_PRODUCTS = 'GET_HOME_PRODUCTS';
export const PENDING_HOME_PRODUCTS = 'PENDING_HOME_PRODUCTS';
export const GET_HOME_COLLECTIONS = 'GET_HOME_COLLECTIONS';
export const PENDING_HOME_COLLECTIONS = 'PENDING_HOME_COLLECTIONS';
export const GET_HOME_SLIDES = 'GET_HOME_SLIDES';
export const PENDING_HOME_SLIDES = 'PENDING_HOME_SLIDES';

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

export const getHomeCollectionsAction = (response) => ({
    type: GET_HOME_COLLECTIONS,
    payload: response
});

export const pendingHomeCollectionsAction = () => ({
    type: PENDING_HOME_COLLECTIONS,
});

export const getHomeSlidesAction = (response) => ({
    type: GET_HOME_SLIDES,
    payload: response
});

export const pendingHomeSlidesAction = () => ({
    type: PENDING_HOME_SLIDES,
});