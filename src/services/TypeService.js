import { DOMAIN_API } from '../components/App';
import { 
    getTypesAction,
    pendingTypesAction
} from '../components/state/actions/TypeActions';

import axios from 'axios';

// EXPORT FUNCTION

export function getTypes(token) {
    return dispatch => {
        dispatch(pendingTypesAction());
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/types',
            headers: {'Authorization': 'Bearer ' + token},
        }).then(function(response) {
            dispatch(getTypesAction(response.data));
        }.bind(this));
    };
}