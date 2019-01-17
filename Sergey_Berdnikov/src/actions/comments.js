import { createAction } from 'redux-actions';

//сигналы
export const loadStarted = createAction('[Comments] Load started');
export const loadCompleted = createAction('[Comments] Load completed');
export const loadFailed = createAction('[Comments] Load failed');

//диспетчер побочный
export const load = () => (dispatch, getState) => {
    const state = getState();
    dispatch(loadStarted());
    fetch(`http://jsonplaceholder.typicode.com/comments?_limit=5&_page=${state.comments.page}`)
        .then((response) => response.json())
        .then((comments) => {
            dispatch(loadCompleted(comments));
        })
        .catch((err) => {
            dispatch(loadFailed(err));
        })
};
