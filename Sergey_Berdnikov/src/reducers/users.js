import { handleActions } from 'redux-actions';

import { loadStarted, loadCompleted, loadFailed } from 'actions/users';

const initialState = {
    entities: [],
    loading: false,
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
        }
    },
    [loadFailed]: (state, action) => {
        return {
            ...state,
            loading: false,
        }
    },
}, initialState)
