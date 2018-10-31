import { DOMAIN_API, CLIENT_ID, CLIENT_SECRET } from '../components/App';
import { 
    getOrderAction,
    pendingOrderAction,
    postOrderAction,
    getUserOrdersAction,
    pendingUserOrdersAction
} from '../components/state/actions/OrderActions';

import axios from 'axios';

// EXPORT FUNCTION

export function getOrder(id) {
    return dispatch => {
        dispatch(pendingOrderAction());
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/order/' + id
        }).then(function(response) {
            dispatch(getOrderAction(response.data));
        }.bind(this));
    };
}

export function postOrder(token, order) {
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
            let token = response.data.access_token;
            axios({
                method: 'post',
                url: DOMAIN_API + 'api/order',
                headers: {'Authorization': 'Bearer ' + token},
                data: {
                    order: order
                }
            }).then(function(response) {
                dispatch(postOrderAction(response.data));
            }.bind(this));
        }.bind(this));
    };
}

export function getUserOrders(id) {
    return dispatch => {
        dispatch(pendingUserOrdersAction());
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/user/' + id + '/orders'
        }).then(function(response) {
            dispatch(getUserOrdersAction(response.data));
        }.bind(this));
    };
}