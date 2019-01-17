import { handleActions } from 'redux-actions';
import { loadStarted, loadCompleted, loadFailed, getCountPade } from 'actions/posts';

const initialState = {
    next: false,
    prev: true,
    entities: [],
    page: 0,
    countPage: 0,
    limit: 3,
};

export default handleActions({
    [getCountPade]: (state, action) => {
        const count = Math.ceil(action.payload / state.limit);
        return {
            ...state,
            countPage: count,
            next: state.page >= count,
        };
    },
    [loadStarted]: (state, action) => {
        return {
            ...state,
            page: state.page + action.payload,
        };
    },
    [loadCompleted]: (state, action) => {
        return {
            ...state,
            next: state.page >= state.countPage,
            prev: state.page <= 1,
            entities: action.payload,
        }
    },
    [loadFailed]: (state, action) => {
            return {
            ...state,
        }
    },
}, initialState);
