import {combineReducers} from 'redux';

import postsReducer from './posts';
import usersReducer from './users';
import commentsReducer from './comments';

export default combineReducers({
    posts: postsReducer,
    users: usersReducer,
    comments: commentsReducer,
})