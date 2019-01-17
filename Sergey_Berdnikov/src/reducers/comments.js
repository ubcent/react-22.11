import { handleActions } from 'redux-actions';

import { loadStarted, loadCompleted, loadFailed } from 'actions/comments';

const initialState = {
    entities: [],
    loading: false,
    page: 1,

};

//вызов сигналов, на каждый из которых назначается своя функция
export default handleActions({
    [loadStarted]: (state, action) => {
        return {
            ...state,
            loading: true,
        }
    },
    [loadCompleted]: (state, action) => {
        return {
            ...state,
            loading: false,
            entities: state.entities.concat(action.payload),
            page: state.page + 1,
        }
    },
    [loadFailed]: (state, action) => {
        return {
            ...state,
            loading: false,
        }
    },
}, initialState)
