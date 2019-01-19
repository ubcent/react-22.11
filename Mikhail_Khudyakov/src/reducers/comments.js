import {handleActions} from 'redux-actions';
import {loadStarted, loadCompleted, loadFailed} from 'actions/comments';
import {DeletePage} from 'actions/deletepage';

const initialState = {
    entities: [],
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
            entities: state.entities.concat(action.payload),
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
