// IMPORT PACKAGES

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createAppStore } from '../components/state/stores/AppStore';
import { AppRouter } from './routers/AppRouter';
import { getToken } from '../services/TokenService';


// COMPONENT

export const DOMAIN_API = 'http://symfony4.fr/';
export const CLIENT_ID = '7_4jbi53j6z8ys4s8gkokk48oc84s48s8sgcg0cg488o8c0w40w4';
export const CLIENT_SECRET = '38dnxypt0okkcswk0gokokc0koc4s8oo8oo84csscwws0s8ggk';

class App extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        getToken();
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