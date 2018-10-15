export const GET_ORDER = 'GET_ORDER';
export const PENDING_ORDER = 'PENDING_ORDER';

// ACTION GENERATORS

export const getOrderAction = (response) => ({
    type: GET_ORDER,
    payload: response
});

export const pendingOrderAction = () => ({
    type: PENDING_ORDER,
});