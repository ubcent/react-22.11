import {createAction} from 'redux-actions';

export const loadStarted = createAction('[Posts] load started');
export const loadCompleted = createAction('[Posts] load completed');
export const loadFailed = createAction('[Posts] load failed');
export const deleteStarted = createAction('[Posts] delete started');
export const deleteCompleted = createAction('[Posts] delete completed');
export const deleteFailed = createAction('[Posts] delete failed');
export const toggleExpanded = createAction('[Posts] toggle expanded');

export const load = () => (dispatch, getState) => {
    const state = getState();
    dispatch(loadStarted());
    fetch(`http://localhost:3003/posts?limit=2&page=${state.posts.page}`)
        .then((response) => response.json())
        .then((posts) => {
            dispatch(loadCompleted(posts));
            console.log(posts);
        })
        .catch((err) => {
            dispatch(loadFailed(err));
        });
};

export const postDelete = () => (dispatch, getState) => {
    const postId = event.target.closest('.PostForm').dataset.postid;
    dispatch(deleteStarted());
    const init = {
        method: 'DELETE',
        body: JSON.stringify({postId: postId}),
        headers: {
            'Content-Type': 'application/json',
        }
    };
    fetch(`http://localhost:3003/posts`, init)
        .then((response) => response.json())
        .then((postId) => {
            dispatch(deleteCompleted(postId));
        })
        .catch((err) => {
            dispatch(deleteFailed(err));
        })
};

export const toggle = (postId) => (dispatch) => {
    dispatch(toggleExpanded(postId));
};