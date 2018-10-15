import { DOMAIN_API } from '../components/App';
import { 
    getOrderAction,
    pendingOrderAction
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