import { createAction } from 'redux-actions';

export const loadStarted = createAction('[Users] Load started');
export const loadCompleted = createAction('[Users] Load completed');
export const loadFailed = createAction('[Users] Load failed');

export const load = () => (dispatch, getState) => {
    const state = getState();
    dispatch(loadStarted());
    fetch(`https://jsonplaceholder.typicode.com/users?_limit=3&_page=${state.users.page}`)
        .then((response) => response.json())
        .then((users) => {
        dispatch(loadCompleted(users));
    })
    .catch((err) => {
        dispatch(loadFailed(err));
    });
}