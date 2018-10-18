export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const LOGOUT = 'LOGOUT';
export const PENDING = 'PENDING';
export const EDIT = 'EDIT';

// ACTION GENERATORS

export const loginAction = (response) => ({
    type: LOGIN,
    payload: response
});

export const registerAction = (response) => ({
    type: REGISTER,
    payload: response
});

export const editAction = (response) => ({
    type: EDIT,
    payload: response
});

export const logoutAction = () => ({
    type: LOGOUT
});

export const pendingAction = () => ({
    type: PENDING,
});
