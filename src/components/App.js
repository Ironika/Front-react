// IMPORT PACKAGES

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createAppStore } from '../components/state/stores/AppStore';
import { AppRouter } from './routers/AppRouter';
import { getToken } from '../services/TokenService';


// COMPONENT

export const DOMAIN_API = 'http://symfony4.fr/';
export const CLIENT_ID = '5_m21t42brl5ww4s0k8kg4gk4ockw4gosowg4sgggg48ko8o0kk';
export const CLIENT_SECRET = '3rkxja5saiiowksgosgk4gks4ggc4gkks44c8kk8kgswosws4c';

class App extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        getToken();
        // window.localStorage.setItem('cart', JSON.stringify([]));
    }

    render() {
        return (
            <Provider store={createAppStore()}>
                <AppRouter />
            </Provider>
        );
    }
}

export { App };