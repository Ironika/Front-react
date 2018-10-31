import { DOMAIN_API } from '../components/App';
import { 
    sendContactAction,
    pendingContactAction,
    closeContactModalAction
} from '../components/state/actions/ContactActions';

import axios from 'axios';

// EXPORT FUNCTION

export function sendContact(email, msg) {
    return dispatch => {
        dispatch(pendingContactAction());
        axios({
            method: 'post',
            url: DOMAIN_API + 'api/contact',
            data: {
                email: email,
                msg: msg
            }
        }).then(function(response) {
            dispatch(sendContactAction(response.data));
        }.bind(this));
    };
}

export function closeContactModal() {
    return dispatch => {
        dispatch(closeContactModalAction());
    };
}