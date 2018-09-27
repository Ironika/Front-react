import { DOMAIN_API } from '../components/App';
import { 
    getHomeBlogsAction, 
    pendingHomeBlogsAction, 
    getHomeProductsAction,
    pendingHomeProductsAction 
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