import {createAction} from 'redux-actions';

export const loadStarted = createAction('[Comments] load started');
export const loadCompleted = createAction('[Comments] load completed');
export const loadFailed = createAction('[Comments] load failed');

export const load = (event) => (dispatch, getState) => {
    const state = getState();
    const postId = event.target.closest('.PostForm').dataset.postid;
    const clickedPost = state.posts.entities.find(entity => entity.postId === postId);

    if (clickedPost.expanded === false) {
        dispatch(loadStarted());
        fetch(`http://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then((response) => response.json())
            .then((comments) => {
                dispatch(loadCompleted(comments));
            })
            .catch((err) => {
                dispatch(loadFailed(err));
            });
    }
};
