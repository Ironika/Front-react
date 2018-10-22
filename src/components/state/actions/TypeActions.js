export const GET_TYPES = 'GET_TYPES';
export const PENDING_TYPES = 'PENDING_TYPES';

// ACTION GENERATORS

export const getTypesAction = (response) => ({
    type: GET_TYPES,
    payload: response
});

export const pendingTypesAction = () => ({
    type: PENDING_TYPES,
});