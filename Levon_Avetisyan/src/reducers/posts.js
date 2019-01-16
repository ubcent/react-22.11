import {handleActions} from 'redux-actions';

import {loadStarted, loadCompleted, loadFailed, toggleExpanded} from 'actions/posts';

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
            entities: state.entities.concat(action.payload.map((post) => {
                return {...post, expanded: false}
            })),
        }
    },
    [toggleExpanded]: (state, action) => {
        const postId = action.payload.target.closest('.PostForm').dataset.postid;
        return {
            ...state,
            entities: state.entities.map((entity) => {
                if (entity.id === +postId) {
                    const exp = entity.expanded;
                    return {
                    ...entity,
                    expanded: !exp,
                    }
                }
                return entity;
            }),
        }
    },
    [loadFailed]: (state, action) => {
        return {
            ...state,
            loading: false,
        }
    },
}, initialState);