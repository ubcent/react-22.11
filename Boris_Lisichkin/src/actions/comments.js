import { createAction } from 'redux-actions';

export const loadStarted = createAction('[Comments] Load started');
export const loadCompleted = createAction('[Comments] Load completed');
export const loadFailed = createAction('[Comments] Load failed');

export const load = () => (dispatch, getState) => {
    const state = getState();
    dispatch(loadStarted());
    fetch(`http://localhost:3000/comments`)
        .then((response) => response.json())
        .then((comments) => {
            dispatch(loadCompleted(comments));
        })
        .catch((err) => {
            dispatch(loadFailed(err));
        });
}