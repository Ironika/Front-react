// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';


// IMPORT REDUCERS
import { HomeReducer } from '../reducers/HomeReducer';
import { BlogReducer } from '../reducers/BlogReducer';
import { ShopReducer } from '../reducers/ShopReducer';

// EXPORT APP REDUCER

export const AppReducer = combineReducers({
    home: HomeReducer,
    blogs: BlogReducer,
    products: ShopReducer
});