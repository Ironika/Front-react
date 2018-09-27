// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';


// IMPORT REDUCERS
import { HomeReducer } from '../reducers/HomeReducer';
import { BlogReducer } from '../reducers/BlogReducer';

// EXPORT APP REDUCER

export const AppReducer = combineReducers({
    home: HomeReducer,
    blogs: BlogReducer
});