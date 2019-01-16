import { createAction } from 'redux-actions';

//сигналы
export const loadStarted = createAction('[Posts] Load started');
export const loadCompleted = createAction('[Posts] Load completed');
export const loadFailed = createAction('[Posts] Load failed');

//диспетчер побочный
export const load = () => (dispatch, getState) => {
    const state = getState();
    dispatch(loadStarted());
    fetch(`http://jsonplaceholder.typicode.com/posts?_limit=7&_page=${state.comments.page}`)
        .then((response) => response.json())
        .then((posts) => {
            dispatch(loadCompleted(posts));
        })
        .catch((err) => {
            dispatch(loadFailed(err));
        })
}