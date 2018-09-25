import axios from 'axios';

export const GET_BLOGS = 'GET_BLOGS';
export const GET_BLOG = 'GET_BLOG';

import { DOMAIN_API } from '../../App';

// ACTION GENERATORS

const getBlogsAction = (response) => ({
    type: GET_BLOGS,
    payload: response
});

const getBlogAction = (response) => ({
    type: GET_BLOG,
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
                client_id: '2_6cssq2234mckk4ok4ocg80os8osg800ggw84s8osk0wkosc444',
                client_secret: '21yz2yx6479c4cscwsco0co80k4wg04w4gow8k4wc4gosks8ws'
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
        axios({
            method: 'post',
            url: DOMAIN_API + 'oauth/v2/token',
            headers: {'Content-Type': 'application/json'},
            data: {
                grant_type: 'client_credentials',
                client_id: '2_6cssq2234mckk4ok4ocg80os8osg800ggw84s8osk0wkosc444',
                client_secret: '21yz2yx6479c4cscwsco0co80k4wg04w4gow8k4wc4gosks8ws'
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
