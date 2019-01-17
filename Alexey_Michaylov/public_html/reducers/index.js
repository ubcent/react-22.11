import { combineReducers } from 'redux';
import commentsReducer from './comments';
import usersReducer from './users';
import postsReducer from './posts';
import commentsPostReducer from './commentsPost';

export default combineReducers({
    comments: commentsReducer,
    users: usersReducer,
    posts: postsReducer,
    commentsPost: commentsPostReducer,
});
