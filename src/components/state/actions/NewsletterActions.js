export const SUBSCRIBE_NEWSLETTER = 'SUBSCRIBE_NEWSLETTER';
export const PENDING_NEWSLETTER = 'PENDING_NEWSLETTER';
export const CLOSE_MODAL = 'CLOSE_MODAL';

// ACTION GENERATORS

export const subscribeNewslettertAction = (response) => ({
    type: SUBSCRIBE_NEWSLETTER,
    payload: response
});

export const pendingNewsletterAction = (response) => ({
    type: PENDING_NEWSLETTER,
    payload: response
});

export const closeModalAction = (response) => ({
    type: CLOSE_MODAL,
    payload: response
});