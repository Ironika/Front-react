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