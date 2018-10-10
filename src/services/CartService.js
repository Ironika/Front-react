// import { DOMAIN_API } from '../components/App';
import { 
    addToCartAction,
    editCartAction 
} from '../components/state/actions/CartActions';


// EXPORT FUNCTION

export function addToCart(orderProduct) {
    return dispatch => {
        dispatch(addToCartAction(orderProduct));
        let cart = JSON.parse(window.localStorage.getItem('cart'));
        cart.push(orderProduct);
        window.localStorage.setItem('cart', JSON.stringify(cart));
    };
}

export function editCart(cart) {
    return dispatch => {
        dispatch(editCartAction(cart));
    };
}