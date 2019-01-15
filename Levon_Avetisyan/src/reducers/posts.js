import {handleActions} from 'redux-actions';

import { loadStarted, loadCompleted, loadFailed } from 'actions/posts';

const initialState = {
    entities: [],
    loading: false,
    page: 1,
};

export default handleActions({
    [loadStarted]: (state, action) => {
        return {
            ...state,
            loading: true,
        };
    },
    [loadCompleted]: (state, action) => {
        return {
            ...state,
            loading: false,
            page: state.page + 1,
            entities: state.entities.concat(action.payload),
        }
    },
    [loadFailed]: (state, action) => {
        return {
            ...state,
            loading: false,
        }
    },
}, initialState);