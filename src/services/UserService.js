import { DOMAIN_API } from '../components/App';
import { 
    loginAction,
    registerAction,
    logoutAction,
    editAction,
    pendingAction,
    removeRedirectAction
} from '../components/state/actions/UserActions';

import axios from 'axios';

// EXPORT FUNCTION

export function login(token, username, password) {
    return dispatch => {
        dispatch(pendingAction());
        axios({
            method: 'post',
            url: DOMAIN_API + 'api/login',
            headers: {'Authorization': 'Bearer ' + token},
            data: {
                username: username,
                password: password
            }
        }).then(function(response) {
            dispatch(loginAction(response.data));
            window.localStorage.setItem('user', JSON.stringify(response.data));
        }.bind(this));
    };
}

export function register(token, email, username, password, plainPassword) {
    return dispatch => {
        dispatch(pendingAction());
        axios({
            method: 'post',
            url: DOMAIN_API + 'api/register',
            headers: {'Authorization': 'Bearer ' + token},
            data: {
                email: email,
                username: username,
                password: password,
                plainPassword: plainPassword
            }
        }).then(function(response) {
            dispatch(registerAction(response.data));
            window.localStorage.setItem('user', JSON.stringify(response.data));
        }.bind(this));
    };
}

export function edit(token, user) {
    return dispatch => {
        dispatch(pendingAction());
        axios({
            method: 'put',
            url: DOMAIN_API + 'api/user/update',
            headers: {'Authorization': 'Bearer ' + token},
            data: {
                user: user,
            }
        }).then(function(response) {
            dispatch(editAction(response.data));
            window.localStorage.setItem('user', JSON.stringify(response.data));
        }.bind(this));
    };
}

export function logout() {
    return dispatch => {
        dispatch(logoutAction());
    };
}

export function removeRedirect() {
    return dispatch => {
        dispatch(removeRedirectAction());
    };
}