import {createAction} from 'redux-actions';

export const loadStarted = createAction('[Posts] Load started');
export const loadCompleted = createAction('[Posts] Load completed');
export const loadFailed = createAction('[Posts] Load failed');

export const load = () => (dispatch) => {
    dispatch(loadStarted());
    fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => response.json())
        .then((posts) => {
            dispatch(loadCompleted(posts));
        })
        .catch((err) => {
            dispatch(loadFailed(err));
        });
};