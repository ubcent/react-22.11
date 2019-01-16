import {handleActions} from 'redux-actions';
import {loadStarted, loadCompleted, loadFailed} from 'actions/users';
import {DeletePage} from 'actions/deletepage';

const initialState = {
    info: [],
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
            info: state.info.concat(action.payload),
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
