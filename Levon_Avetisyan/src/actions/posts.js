import {createAction} from 'redux-actions';

export const loadStarted = createAction('[Posts] load started');
export const loadCompleted = createAction('[Posts] load completed');
export const loadFailed = createAction('[Posts] load failed');
export const toggleExpanded = createAction('[Posts] toggle expanded');

export const load = () => (dispatch, getState) => {
    const state = getState();
    dispatch(loadStarted());
    fetch(`http://localhost:3003/posts?limit=1&page=${state.posts.page}`)
        .then((response) => response.json())
        .then((posts) => {
            dispatch(loadCompleted(posts));
        })
        .catch((err) => {
            dispatch(loadFailed(err));
        });
};

export const toggle = (postId) => (dispatch) => {
    dispatch(toggleExpanded(postId));
};