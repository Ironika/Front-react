// IMPORT PACKAGES

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createAppStore } from '../components/state/stores/AppStore';
import { AppRouter } from './routers/AppRouter';
//import { getToken } from '../services/TokenService';


// COMPONENT

// export const DOMAIN_API = 'http://symfony4.fr/';
export const DOMAIN_API = 'https://ineluctable.ironika.me/';
export const CLIENT_ID = '6_1cfl8k66k64g0gc8k4gow00sowsso0gs8ccko8s0o08kcgc80k';
export const CLIENT_SECRET = '2zwuhridy5k48goks0sg044go8cw44gc0w0okoc0gw0o0g4s8g';

class App extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //getToken();
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