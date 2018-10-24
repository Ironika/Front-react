// IMPORT PACKAGE REFERENCES

import { combineReducers } from 'redux';


// IMPORT REDUCERS
import { HomeReducer } from '../reducers/HomeReducer';
import { BlogReducer } from '../reducers/BlogReducer';
import { ShopReducer } from '../reducers/ShopReducer';
import { CartReducer } from '../reducers/CartReducer';
import { SearchReducer } from '../reducers/SearchReducer';
import { UserReducer } from '../reducers/UserReducer';
import { OrderReducer } from '../reducers/OrderReducer';
import { TypeReducer } from '../reducers/TypeReducer';
import { NewsletterReducer } from '../reducers/NewsletterReducer';

// EXPORT APP REDUCER

export const AppReducer = combineReducers({
    home: HomeReducer,
    blogs: BlogReducer,
    products: ShopReducer,
    cart: CartReducer,
    search: SearchReducer,
    user: UserReducer,
    orders: OrderReducer,
    types: TypeReducer,
    newsletter: NewsletterReducer
});