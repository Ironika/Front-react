import {
    SUBSCRIBE_NEWSLETTER,
    PENDING_NEWSLETTER,
    CLOSE_MODAL
} from '../actions/NewsletterActions';


// INITIALIZE STATE

const initialState = {
    newsletter: '',
    fetching_newsletter: false,
    modal: false
};


// REDUCER

export const NewsletterReducer = (state = initialState, action) => {
    switch(action.type) {
        case SUBSCRIBE_NEWSLETTER:
            return {
                ...state,
                newsletter: action.payload,
                fetching_newsletter: false,
                modal: true
            };
        case PENDING_NEWSLETTER:
            return {
                ...state,
                fetching_newsletter: true
            };
        case CLOSE_MODAL:
            return {
                ...state,
                modal: false
            };
        default:
            return state;
    }
};