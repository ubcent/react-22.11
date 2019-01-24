import {createAction} from 'redux-actions';

export const loadStarted = createAction('[Users] load started');
export const loadCompleted = createAction('[Users] load completed');
export const loadFailed = createAction('[Users] load failed');

export const load = () => (dispatch) => {
    dispatch(loadStarted());
    fetch(`http://jsonplaceholder.typicode.com/users`)
        .then((response) => response.json())
        .then((users) => {
            dispatch(loadCompleted(users));
        })
        .catch((err) => {
            dispatch(loadFailed(err));
        });
};
