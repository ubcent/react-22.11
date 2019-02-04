import {createAction} from 'redux-actions';

export const loadStarted = createAction('[Comments] Load started');
export const loadCompleted = createAction('[Comments] Load completed');
export const loadFailed = createAction('[Comments] Load failed');

export const loadStartedUsers = createAction('[Comments] Load started users');

export const load = () => (dispatch, getState) => {
  const state = getState();
  dispatch(loadStarted());
  fetch(`https://jsonplaceholder.typicode.com/${state.connection.fetchData}?_limit=10&_page=${state.connection.page}`)
    .then((response)=>response.json())
    .then ((fetchData)=>{
      dispatch(loadCompleted(fetchData));
    })
    .catch((err)=>{
      dispatch(loadFailed(err))
    });
};
