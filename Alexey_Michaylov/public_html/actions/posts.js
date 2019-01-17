import { createAction } from 'redux-actions';

export const loadStarted = createAction('[Posts] Load started');
export const loadCompleted = createAction('[Posts] Load completed');
export const loadFailed = createAction('[Posts] Load failed');
export const getCountPade = createAction('[Posts] Get countPade');

export const load = (e) => (dispatch, getState) => {
    const state = getState();
    const addition = e && e.target.name === 'prev' ? -1 : 1;
    if(!e) {
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then((response) => response.json())
            .then((posts) => {
                dispatch(getCountPade(posts.length));
            });    
    }
    dispatch(loadStarted(addition));
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${state.posts.limit}&_page=${state.posts.page + addition}`)
        .then((response) => response.json())
        .then((posts) => {
            dispatch(loadCompleted(posts));
        })
        .catch((err) => {
            dispatch(loadFailed(err));
        });
}
