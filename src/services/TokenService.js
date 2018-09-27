import { DOMAIN_API, CLIENT_ID, CLIENT_SECRET } from '../components/App';

import axios from 'axios';

export function getToken() {
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
        window.localStorage.setItem('token', response.data.access_token);
    }.bind(this));
}