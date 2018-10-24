import { DOMAIN_API } from '../components/App';
import { 
    subscribeNewslettertAction,
    pendingNewsletterAction,
    closeModalAction
} from '../components/state/actions/NewsletterActions';

import axios from 'axios';

// EXPORT FUNCTION

export function subscribeNewsletter(token, email) {
    return dispatch => {
        dispatch(pendingNewsletterAction());
        axios({
            method: 'post',
            url: DOMAIN_API + 'api/newsletter',
            headers: {'Authorization': 'Bearer ' + token},
            data: {
                email: email
            }
        }).then(function(response) {
            dispatch(subscribeNewslettertAction(response.data));
        }.bind(this));
    };
}

export function closeModal() {
    return dispatch => {
        dispatch(closeModalAction());
    };
}