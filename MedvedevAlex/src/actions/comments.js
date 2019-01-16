import {createAction} from 'redux-actions';

export const loadStarted = createAction('[Comments] Load started');
export const loadCompleted = createAction('[Comments] Load completed');
export const loadFailed = createAction('[Comments] Load failed');

export const loadStartedUsers = createAction('[Comments] Load started users');

export const load = () => (dispatch, getState) => {
  const state = getState();
  console.log(state);
  dispatch(loadStarted());
  fetch(`https://jsonplaceholder.typicode.com/${state.comments.fetchData}?_limit=10&_page=${state.comments.page}`)
    .then((response)=>response.json())
    .then ((comments)=>{
      dispatch(loadCompleted(comments));
    })
    .catch((err)=>{
      dispatch(loadFailed(err))
    });
};
