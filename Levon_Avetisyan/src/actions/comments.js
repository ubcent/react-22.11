import {createAction} from 'redux-actions';

export const loadStarted = createAction('[Comments] load started');
export const loadCompleted = createAction('[Comments] load completed');
export const loadFailed = createAction('[Comments] load failed');

export const load = () => (dispatch, getState) => {
    const state = getState();
    dispatch(loadStarted());
    console.log(state.posts);
    fetch(`http://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then((response) => response.json())
        .then((comments) => {
            dispatch(loadCompleted(comments));
        })
        .catch((err) => {
            dispatch(loadFailed(err));
        });
};
