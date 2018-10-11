export const SEARCH = 'SEARCH';
export const PENDING = 'PENDING';

// ACTION GENERATORS

export const searchAction = (response) => ({
    type: SEARCH,
    payload: response
});

export const pendingAction = () => ({
    type: PENDING,
});