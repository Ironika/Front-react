import { DOMAIN_API } from '../components/App';
import { 
    getOrderAction,
    pendingOrderAction,
    postOrderAction,
    getUserOrdersAction,
    pendingUserOrdersAction
} from '../components/state/actions/OrderActions';

import axios from 'axios';

// EXPORT FUNCTION

export function getOrder(token, id) {
    return dispatch => {
        dispatch(pendingOrderAction());
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/order/' + id,
            headers: {'Authorization': 'Bearer ' + token},
        }).then(function(response) {
            dispatch(getOrderAction(response.data));
        }.bind(this));
    };
}

export function postOrder(token, order) {
    return dispatch => {
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
    };
}

export function getUserOrders(token, id) {
    return dispatch => {
        dispatch(pendingUserOrdersAction());
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/user/' + id + '/order',
            headers: {'Authorization': 'Bearer ' + token},
        }).then(function(response) {
            dispatch(getUserOrdersAction(response.data));
        }.bind(this));
    };
}