import {handleActions} from 'redux-actions';
import {loadStarted, loadCompleted, loadFailed} from 'actions/blog';
import {DeletePage} from 'actions/deletepage';

const initialState = {
    posts: [],
    loading: false,
    page: 1,
};

export default handleActions({
    [loadStarted]: (state) => {
        return {
            ...state,
            loading: true,
        };
    },
    [loadCompleted]: (state, action) => {
        return {
            ...state,
            loading: false,
            posts: state.posts.concat(action.payload),
            page: state.page + 1,
        }
    },
    [loadFailed]: (state) => {
        return {
            ...state,
            loading: false,
        }
    },
    [DeletePage]: (state) => {
        return {
            ...state,
            page: 1,
        }
    },
}, initialState);
