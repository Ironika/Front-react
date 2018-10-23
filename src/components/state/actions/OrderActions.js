export const GET_ORDER = 'GET_ORDER';
export const PENDING_ORDER = 'PENDING_ORDER';
export const POST_ORDER = 'POST_ORDER';
export const RESET_REDIRECT = 'RESET_REDIRECT';
export const GET_USER_ORDERS = 'GET_USER_ORDERS';
export const PENDING_USER_ORDERS = 'PENDING_USER_ORDERS';

// ACTION GENERATORS

export const getOrderAction = (response) => ({
    type: GET_ORDER,
    payload: response
});

export const pendingOrderAction = () => ({
    type: PENDING_ORDER,
});

export const postOrderAction = (response) => ({
    type: POST_ORDER,
    payload: response
});

export const resetRedirectAction = () => ({
    type: RESET_REDIRECT,
});

export const getUserOrdersAction = (response) => ({
    type: GET_USER_ORDERS,
    payload: response
});

export const pendingUserOrdersAction = () => ({
    type: PENDING_USER_ORDERS,
});