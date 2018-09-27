export const GET_BLOGS = 'GET_BLOGS';
export const GET_BLOG = 'GET_BLOG';
export const PENDING_BLOG = 'PENDING_BLOG';

export const PENDING = 'PENDING';
export const GET_TAGS = 'GET_TAGS';
export const GET_PRODUCTS = 'GET_PRODUCTS';

// ACTION GENERATORS

export const getBlogsAction = (response) => ({
    type: GET_BLOGS,
    payload: response
});

export const getBlogAction = (response) => ({
    type: GET_BLOG,
    payload: response
});

export const pendingBlogAction = () => ({
    type: PENDING_BLOG,
});

export const pendingAction = () => ({
    type: PENDING,
});

export const getTagsAction = (response) => ({
    type: GET_TAGS,
    payload: response
});

export const getProductsAction = (response) => ({
    type: GET_PRODUCTS,
    payload: response
});
