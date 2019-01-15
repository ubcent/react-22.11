import {createAction} from 'redux-actions';

export const loadStarted = createAction('[Posts] load started');
export const loadCompleted = createAction('[Posts] load completed');
export const loadFailed = createAction('[Posts] load failed');

export const load = () => (dispatch, getState) => {
    const state = getState();
    dispatch(loadStarted());
    fetch(`http://jsonplaceholder.typicode.com/posts?_limit=1&_page=${state.posts.page}`)
        .then((response) => response.json())
        .then((posts) => {
            dispatch(loadCompleted(posts));
        })
        .catch((err) => {
            dispatch(loadFailed(err));
        });
};

