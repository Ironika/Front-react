// IMPORT PACKAGES

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createAppStore } from '../components/state/stores/AppStore';
import { AppRouter } from './routers/AppRouter';
import { getToken } from '../services/TokenService';


// COMPONENT

export const DOMAIN_API = 'http://symfony4.fr/';
export const CLIENT_ID = '2_4obiq38pia68kcogs40wgokowksgso04840c4s0ggg4w0cgsog';
export const CLIENT_SECRET = 'qyf3hm1q0pc8wk8oc0ok4g004wk4c08sg80k4cwc8ks0ccwgw';

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