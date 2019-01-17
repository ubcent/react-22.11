import { combineReducers } from 'redux';

import commentsReducer from './comments';
import usersReducers from './users';
import postsReducers from './posts';

export default combineReducers({
    comments: commentsReducer,
    users: usersReducers,
    posts: postsReducers,
});
