// IMPORT PACKAGES

import React from 'react';
import { Provider } from 'react-redux';

// IMPORT STORE

import { createAppStore } from '../components/state/stores/AppStore';

// IMPORT COMPONENTS

import { AppRouter } from './routers/AppRouter';

// COMPONENT

export const App = () => (
    <Provider store={createAppStore()}>
        <AppRouter />
    </Provider>
);

export const DOMAIN_API = 'http://symfony4.fr/';
export const CLIENT_ID = '7_4jbi53j6z8ys4s8gkokk48oc84s48s8sgcg0cg488o8c0w40w4';
export const CLIENT_SECRET = '38dnxypt0okkcswk0gokokc0koc4s8oo8oo84csscwws0s8ggk';