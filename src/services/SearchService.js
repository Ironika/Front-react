import { DOMAIN_API } from '../components/App';
import { 
    getSearchAction, 
    pendingAction,
    setSearchAction
} from '../components/state/actions/SearchActions';

import axios from 'axios';

// EXPORT FUNCTION

export function getSearch(search) {
    return dispatch => {
        dispatch(pendingAction());
        axios({
            method: 'get',
            url: DOMAIN_API + 'api/search',
            params: {
                search: search
            }
        }).then(function(response) {
            dispatch(getSearchAction(response.data));
        }.bind(this));
    };
}

export function setSearch(search) {
    return dispatch => {
        dispatch(setSearchAction(search));
    };
}