import {handleActions} from 'redux-actions';

import {loadStarted, loadCompleted, loadFailed} from 'actions/comments';

const initialState = {
    entities: [],
    loading: false,
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
            entities: state.entities.concat(action.payload.filter((entity) =>
                !state.entities.find((stateEnt) => stateEnt.postId === entity.postId)
            )),
        }
    },
    [loadFailed]: (state, action) => {
        return {
            ...state,
            loading: false,
        }
    },
}, initialState);