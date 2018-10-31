import { DOMAIN_API, CLIENT_ID, CLIENT_SECRET } from '../components/App';
import { 
    loginAction,
    registerAction,
    logoutAction,
    editAction,
    pendingAccountAction,
    removeRedirectAction
} from '../components/state/actions/UserActions';

import axios from 'axios';

// EXPORT FUNCTION

export function login(username, password) {
    return dispatch => {
        dispatch(pendingAccountAction());
        axios({
            method: 'post',
            url: DOMAIN_API + 'api/login',
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

export function register(email, username, password, plainPassword) {
    return dispatch => {
        dispatch(pendingAccountAction());
        axios({
            method: 'post',
            url: DOMAIN_API + 'oauth/v2/token',
            headers: {'Content-Type': 'application/json'},
            data: {
                grant_type: 'client_credentials',
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET
            }
        }).then(function(response) {
            let token = response.data.access_token;
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
        }.bind(this));
    };
}

export function edit(user) {
    return dispatch => {
        dispatch(pendingAccountAction());
        axios({
            method: 'post',
            url: DOMAIN_API + 'oauth/v2/token',
            headers: {'Content-Type': 'application/json'},
            data: {
                grant_type: 'client_credentials',
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET
            }
        }).then(function(response) {
            let token = response.data.access_token;
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