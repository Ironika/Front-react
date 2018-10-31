import { DOMAIN_API } from '../components/App';
import { 
    getBlogsAction, 
    pendingBlogAction, 
    getBlogAction, 
    pendingAction, 
    getTagsAction, 
    getProductsAction 
} from '../components/state/actions/BlogActions';

import axios from 'axios';

// EXPORT FUNCTION

export function getBlogs() {
    return dispatch => {
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/blogs'
        }).then(function(response) {
            dispatch(getBlogsAction(response.data));
        }.bind(this));
    };
}

export function getBlog(slug) {
    return dispatch => {
        dispatch(pendingBlogAction());
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/blog/' + slug
        }).then(function(response) {
            dispatch(getBlogAction(response.data));
        }.bind(this));
    };
}

export function getTags() {
    return dispatch => {
        dispatch(pendingAction());
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/tags'
        }).then(function(response) {
            dispatch(getTagsAction(response.data));
        }.bind(this));
    };
}

export function getProducts() {
    return dispatch => {
        dispatch(pendingAction());
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/products'
        }).then(function(response) {
            dispatch(getProductsAction(response.data));
        }.bind(this));
    };
}