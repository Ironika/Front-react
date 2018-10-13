export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const PENDING = 'PENDING';

// ACTION GENERATORS

export const loginAction = (response) => ({
    type: LOGIN,
    payload: response
});

export const logoutAction = () => ({
    type: LOGOUT
});

export const pendingAction = () => ({
    type: PENDING,
});