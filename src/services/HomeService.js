import { DOMAIN_API } from '../components/App';
import { 
    getHomeBlogsAction, 
    pendingHomeBlogsAction, 
    getHomeProductsAction,
    pendingHomeProductsAction,
    getHomeCollectionsAction,
    pendingHomeCollectionsAction,
    getHomeSlidesAction,
    pendingHomeSlidesAction
} from '../components/state/actions/HomeActions';

import axios from 'axios';

// EXPORT FUNCTION

export function getHomeBlogs(token) {
    return dispatch => {
        dispatch(pendingHomeBlogsAction());
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/blogs',
            headers: {'Authorization': 'Bearer ' + token},
        }).then(function(response) {
            dispatch(getHomeBlogsAction(response.data));
        }.bind(this));
    };
}

export function getHomeProducts(token) {
    return dispatch => {
        dispatch(pendingHomeProductsAction());
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/products',
            headers: {'Authorization': 'Bearer ' + token},
        }).then(function(response) {
            dispatch(getHomeProductsAction(response.data));
        }.bind(this));
    };
}

export function getHomeCollections(token) {
    return dispatch => {
        dispatch(pendingHomeCollectionsAction());
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/collections',
            headers: {'Authorization': 'Bearer ' + token},
        }).then(function(response) {
            dispatch(getHomeCollectionsAction(response.data));
        }.bind(this));
    };
}

export function getHomeSlides(token) {
    return dispatch => {
        dispatch(pendingHomeSlidesAction());
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/slides',
            headers: {'Authorization': 'Bearer ' + token},
        }).then(function(response) {
            dispatch(getHomeSlidesAction(response.data));
        }.bind(this));
    };
}