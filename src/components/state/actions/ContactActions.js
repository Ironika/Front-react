export const CONTACT_SEND = 'CONTACT_SEND';
export const PENDING_CONTACT = 'PENDING_CONTACT';
export const CLOSE_CONTACT_MODAL = 'CLOSE_CONTACT_MODAL';

// ACTION GENERATORS

export const sendContactAction = (response) => ({
    type: CONTACT_SEND,
    payload: response
});

export const pendingContactAction = (response) => ({
    type: PENDING_CONTACT,
    payload: response
});

export const closeContactModalAction = (response) => ({
    type: CLOSE_CONTACT_MODAL,
    payload: response
});