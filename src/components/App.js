// IMPORT PACKAGES

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createAppStore } from '../components/state/stores/AppStore';
import { AppRouter } from './routers/AppRouter';
import { getToken } from '../services/TokenService';


// COMPONENT

export const DOMAIN_API = 'http://symfony4.fr/';
export const CLIENT_ID = '1_2s774kzvcu0w0kosg8wgoggwo4oow488wko4s4cogoggkwsk84';
export const CLIENT_SECRET = '21lr6ywngwdckcwgk8ko4848c8wo04oo0cokgs4kg4kk0g40kc';

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