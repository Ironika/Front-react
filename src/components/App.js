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
export const CLIENT_ID = '6_224j4urwenwgs0gc4o88ks04gkccgg4w040gw40kgk4so8wg00';
export const CLIENT_SECRET = '1uqjyoqoez34ggwg84kc40kg8kcwoo44sg4wswcgk4sogkksg8';