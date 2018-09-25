import axios from 'axios';

export const GET_BLOGS = 'GET_BLOGS';
export const GET_BLOG = 'GET_BLOG';
export const PENDING = 'BLOG_PENDING';

export const GET_TAGS = 'GET_TAGS';

import { DOMAIN_API, CLIENT_ID, CLIENT_SECRET } from '../../App';

// ACTION GENERATORS

const getBlogsAction = (response) => ({
    type: GET_BLOGS,
    payload: response
});

const getBlogAction = (response) => ({
    type: GET_BLOG,
    payload: response
});

const pendingAction = () => ({
    type: PENDING,
});

const getTagsAction = (response) => ({
    type: GET_TAGS,
    payload: response
});

// EXPORT FUNCTION

export function getBlogs() {
    return dispatch => {
        axios({
            method: 'post',
            url: DOMAIN_API + 'oauth/v2/token',
            headers: {'Content-Type': 'application/json'},
            data: {
                grant_type: 'client_credentials',
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET
            }
        }).then(function(response) {
            const token = response.data.access_token;
            axios({
                method: 'get',
                url: DOMAIN_API + 'api/blogs',
                headers: {'Authorization': 'Bearer ' + token},
            }).then(function(response) {
                dispatch(getBlogsAction(response.data));
            }.bind(this));
        }.bind(this));
    };
}

export function getBlog(slug) {
    return dispatch => {
        dispatch(pendingAction());
        axios({
            method: 'post',
            url: DOMAIN_API + 'oauth/v2/token',
            headers: {'Content-Type': 'application/json'},
            data: {
                grant_type: 'client_credentials',
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET
            }
        }).then(function(response) {
            const token = response.data.access_token;
            axios({
                method: 'get',
                url: DOMAIN_API + 'api/blog/' + slug,
                headers: {'Authorization': 'Bearer ' + token},
            }).then(function(response) {
                dispatch(getBlogAction(response.data));
            }.bind(this));
        }.bind(this));
    };
}

export function getTags() {
    return dispatch => {
        dispatch(pendingAction());
        axios({
            method: 'post',
            url: DOMAIN_API + 'oauth/v2/token',
            headers: {'Content-Type': 'application/json'},
            data: {
                grant_type: 'client_credentials',
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET
            }
        }).then(function(response) {
            const token = response.data.access_token;
            axios({
                method: 'get',
                url: DOMAIN_API + 'api/tags',
                headers: {'Authorization': 'Bearer ' + token},
            }).then(function(response) {
                dispatch(getTagsAction(response.data));
            }.bind(this));
        }.bind(this));
    };
}
