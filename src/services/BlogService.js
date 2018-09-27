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

export function getBlogs(token) {
    return dispatch => {
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/blogs',
            headers: {'Authorization': 'Bearer ' + token},
        }).then(function(response) {
            dispatch(getBlogsAction(response.data));
        }.bind(this));
    };
}

export function getBlog(token, slug) {
    return dispatch => {
        dispatch(pendingBlogAction());
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/blog/' + slug,
            headers: {'Authorization': 'Bearer ' + token},
        }).then(function(response) {
            dispatch(getBlogAction(response.data));
        }.bind(this));
    };
}

export function getTags(token) {
    return dispatch => {
        dispatch(pendingAction());
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/tags',
            headers: {'Authorization': 'Bearer ' + token},
        }).then(function(response) {
            dispatch(getTagsAction(response.data));
        }.bind(this));
    };
}

export function getProducts(token) {
    return dispatch => {
        dispatch(pendingAction());
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/products',
            headers: {'Authorization': 'Bearer ' + token},
        }).then(function(response) {
            dispatch(getProductsAction(response.data));
        }.bind(this));
    };
}