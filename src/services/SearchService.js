import { DOMAIN_API } from '../components/App';
import { 
    searchAction, 
    pendingAction,  
} from '../components/state/actions/SearchActions';

import axios from 'axios';

// EXPORT FUNCTION

export function search(token, search) {
    return dispatch => {
        dispatch(pendingAction());
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/search',
            headers: {'Authorization': 'Bearer ' + token},
            params: {
                search: search
            }
        }).then(function(response) {
            dispatch(searchAction(response.data));
        }.bind(this));
    };
}