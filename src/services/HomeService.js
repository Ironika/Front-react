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

export function getHomeBlogs() {
    return dispatch => {
        dispatch(pendingHomeBlogsAction());
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/blogs'
        }).then(function(response) {
            dispatch(getHomeBlogsAction(response.data));
        }.bind(this));
    };
}

export function getHomeProducts() {
    return dispatch => {
        dispatch(pendingHomeProductsAction());
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/products'
        }).then(function(response) {
            dispatch(getHomeProductsAction(response.data));
        }.bind(this));
    };
}

export function getHomeCollections() {
    return dispatch => {
        dispatch(pendingHomeCollectionsAction());
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/collections'
        }).then(function(response) {
            dispatch(getHomeCollectionsAction(response.data));
        }.bind(this));
    };
}

export function getHomeSlides() {
    return dispatch => {
        dispatch(pendingHomeSlidesAction());
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/slides'
        }).then(function(response) {
            dispatch(getHomeSlidesAction(response.data));
        }.bind(this));
    };
}