import {combineReducers} from 'redux';
import blogReducer from './blog';
import usersReducer from './users';
import commentsReducer from './comments';

export default combineReducers({
    blog: blogReducer,
    users: usersReducer,
    comments: commentsReducer,
});
