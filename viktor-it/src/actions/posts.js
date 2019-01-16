import {createAction} from 'redux-actions';

export const loadStarted = createAction('[Posts] Load started');
export const loadCompleted = createAction('[Posts] Load completed');
export const loadFailed = createAction('[Posts] Load failed');

export const load = () => (dispatch) => {
  dispatch(loadStarted());
  fetch(`https://jsonplaceholder.typicode.com/posts?_limit=2`)
  .then((response) => response.json())
  .then((_posts) => {
    dispatch(loadCompleted(_posts));
  })
  .catch((err) => {
    dispatch(loadFailed(err));
  });
};