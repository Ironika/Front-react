import {
    CONTACT_SEND,
    PENDING_CONTACT,
    CLOSE_CONTACT_MODAL
} from '../actions/ContactActions';


// INITIALIZE STATE

const initialState = {
    contact: '',
    fetching_contact: false,
    modal: false
};


// REDUCER

export const ContactReducer = (state = initialState, action) => {
    switch(action.type) {
        case CONTACT_SEND:
            return {
                ...state,
                contact: action.payload,
                fetching_contact: false,
                modal: true
            };
        case PENDING_CONTACT:
            return {
                ...state,
                fetching_contact: true
            };
        case CLOSE_CONTACT_MODAL:
            return {
                ...state,
                modal: false
            };
        default:
            return state;
    }
};