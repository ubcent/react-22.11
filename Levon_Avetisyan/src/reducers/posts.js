import {handleActions} from 'redux-actions';

import {
    loadStarted,
    loadCompleted,
    loadFailed,
    toggleExpanded,
    deleteStarted,
    deleteCompleted,
    deleteFailed
} from 'actions/posts';

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
        const filteredPosts = action.payload.docs.filter((post) => {
            if (state.entities.find(elem => post.postId === elem.postId) === undefined) return true;
        });
        return {
            ...state,
            loading: false,
            page: action.payload.page + 1,
            entities: state.entities.concat(filteredPosts.map((post) => {
                return {...post, expanded: false}
            })),
        }
    },
    [deleteCompleted]: (state, action) => {
        state.entities = state.entities.filter(post => action.payload !== post.postId);
        let i = 1;
        state.entities = state.entities.map(post => ({
            ...post,
            postId: String(i++)
        }));
        return {
            ...state
        }
    },
    [toggleExpanded]: (state, action) => {
        const postId = action.payload.target.closest('.PostForm').dataset.postid;
        return {
            ...state,
            entities: state.entities.map((entity) => {
                if (entity.postId === postId) {
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