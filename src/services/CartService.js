// import { DOMAIN_API } from '../components/App';
import { 
    addToCartAction, 
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