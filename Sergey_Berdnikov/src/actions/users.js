import { createAction } from 'redux-actions';

//сигналы
export const loadStarted = createAction('[Users] Load started');
export const loadCompleted = createAction('[Users] Load completed');
export const loadFailed = createAction('[Users] Load failed');

//диспетчер побочный
export const load = () => (dispatch) => {
    dispatch(loadStarted());
    fetch('http://jsonplaceholder.typicode.com/users?_limit=10')
        .then((response) => response.json())
        .then((users) => {
            dispatch(loadCompleted(users));
        })
        .catch((err) => {
            dispatch(loadFailed(err));
        })
};
