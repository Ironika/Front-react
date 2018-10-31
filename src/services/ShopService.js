import { DOMAIN_API } from '../components/App';
import { 
    pendingProductsAction,  
    getProductsAction,
    pendingProductAction,  
    getProductAction,
    setFiltersAction,
    getMaterialsAction,
    getSizesAction,
    getShapesAction,
    getCollectionsAction,
    getColorsAction,
    getStatesAction  
} from '../components/state/actions/ShopActions';

import axios from 'axios';

// EXPORT FUNCTION

export function getProducts() {
    return dispatch => {
        dispatch(pendingProductsAction());
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/products'
        }).then(function(response) {
            dispatch(getProductsAction(response.data));
        }.bind(this));
    };
}

export function getProduct(slug) {
    return dispatch => {
        dispatch(pendingProductAction());
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/product/' + slug
        }).then(function(response) {
            dispatch(getProductAction(response.data));
        }.bind(this));
    };
}

export function setFilters(filters) {
    return dispatch => {
        dispatch(setFiltersAction(filters));
    };
}

export function getFilters() {
    return dispatch => {
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/materials'
        }).then(function(response) {
            dispatch(getMaterialsAction(response.data));
        }.bind(this));
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/sizes'
        }).then(function(response) {
            dispatch(getSizesAction(response.data));
        }.bind(this));
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/shapes'
        }).then(function(response) {
            dispatch(getShapesAction(response.data));
        }.bind(this));
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/collections'
        }).then(function(response) {
            dispatch(getCollectionsAction(response.data));
        }.bind(this));
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/colors'
        }).then(function(response) {
            dispatch(getColorsAction(response.data));
        }.bind(this));
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/states'
        }).then(function(response) {
            dispatch(getStatesAction(response.data));
        }.bind(this));
    };
}