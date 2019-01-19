import {createAction} from 'redux-actions';

export const loadStarted = createAction('[Blog] Load started');
export const loadCompleted = createAction('[Blog] Load completed');
export const loadFailed = createAction('[Blog] Load failed');

export const load = () => (dispatch, getState) => {
    const state = getState();
    dispatch(loadStarted());
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5&_page=${state.blog.page}`)
        .then((response) => response.json())
        .then((blog) => {
            dispatch(loadCompleted(blog));
        })
        .catch((error) => {
            dispatch(loadFailed(error));
        })
};
