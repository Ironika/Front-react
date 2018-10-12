export const GET_SEARCH = 'GET_SEARCH';
export const PENDING = 'PENDING';
export const SET_SEARCH = 'SET_SEARCH';

// ACTION GENERATORS

export const getSearchAction = (response) => ({
    type: GET_SEARCH,
    payload: response
});

export const pendingAction = () => ({
    type: PENDING,
});

export const setSearchAction = (response) => ({
    type: SET_SEARCH,
    payload: response
});