import { createAction } from 'redux-actions';

export const loadComments = createAction('[Comments] Load'); //создаем action с уникальным индентификатором [Comments] Load

export const loadStarted = createAction('[Comments] Load started');
export const loadCompleted = {
  comments: createAction('[Comments] Load completed'),
  posts: createAction('[Posts] Load completed'),
  users: createAction('[Users] Load completed')
};
export const loadFailed = createAction('[Comments] Load faild');



/* export const load = () => (dispatch) => {
  dispatch(loadStarted());
  console.log(url);
  debugger;
  fetch(`https://jsonplaceholder.typicode.com/comments`)
    .then((response) => response.json())
    .then((comments) => {
      dispatch(loadCompleted(comments));
    })
    .catch((err) => {
      dispatch(loadFailed(err));
    });

} */

export const load = (name) => (dispatch) => {
  /*   dispatch(loadStarted()); */
  fetch(`https://jsonplaceholder.typicode.com/${name}`)
    .then((response) => response.json())
    .then((data) => {
      dispatch(loadCompleted[name](data));
    })
    .catch((err) => {
      dispatch(loadFailed(err));
    });

}




