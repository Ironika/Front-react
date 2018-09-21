import axios from 'axios';

export const GET_BLOGS = 'GET_BLOGS';

// ACTION GENERATORS

const getBlogsAction = (response) => ({
    type: GET_BLOGS,
    payload: response
});

// EXPORT FUNCTION

export function getBlogs() {
    return dispatch => {
        axios({
            method: 'post',
            url: 'http://symfony4.fr/oauth/v2/token',
            data: {
                grant_type: 'client_credentials',
                client_id: '6_224j4urwenwgs0gc4o88ks04gkccgg4w040gw40kgk4so8wg00',
                client_secret: '1uqjyoqoez34ggwg84kc40kg8kcwoo44sg4wswcgk4sogkksg8'
            }
        }).then(function(response) {
            const token = response.data.access_token;
            axios({
                method: 'get',
                url: 'http://symfony4.fr/api/blogs',
                headers: {'Authorization': 'Bearer ' + token},
            }).then(function(response) {
                dispatch(getBlogsAction(response.data));
            }.bind(this));
        }.bind(this));
    };
}
