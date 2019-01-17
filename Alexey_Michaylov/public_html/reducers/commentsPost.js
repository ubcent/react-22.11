import { handleActions } from 'redux-actions';
import { loadStarted, loadCompleted, loadFailed } from 'actions/commentsPost';

const initialState = {
    entities: [],
};

export default handleActions({
    [loadStarted]: (state, action) => {
        return {
            ...state,
        };
    },
    [loadCompleted]: (state, action) => {
        return {
            ...state,
            entities: state.entities.concat(action.payload),
        }
    },
    [loadFailed]: (state, action) => {
            return {
            ...state,
        }
    },
}, initialState);
