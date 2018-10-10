import { DOMAIN_API } from '../components/App';
import { 
    pendingProductsAction,  
    getProductsAction,
    pendingProductAction,  
    getProductAction,
    setFiltersAction 
} from '../components/state/actions/ShopActions';

import axios from 'axios';

// EXPORT FUNCTION

export function getProducts(token) {
    return dispatch => {
        dispatch(pendingProductsAction());
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/products',
            headers: {'Authorization': 'Bearer ' + token},
        }).then(function(response) {
            dispatch(getProductsAction(response.data));
        }.bind(this));
    };
}

export function getProduct(token, slug) {
    return dispatch => {
        dispatch(pendingProductAction());
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/product/' + slug,
            headers: {'Authorization': 'Bearer ' + token},
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