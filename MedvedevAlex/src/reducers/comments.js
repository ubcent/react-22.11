import {handleActions} from 'redux-actions';

import {loadStarted, loadStartedUsers, loadCompleted, loadFailed} from 'actions/comments';

const initialState = {
  entities: [],
  loading: false,
  page: 0,
  fetchData: 'comments',
};

export default handleActions({
  [loadStarted]: (state, action) => {
    return {
      ...state,
      loading: true,
    }
  },
  [loadStartedUsers]: (state, action) => {
    return {
      ...state,
      loading: true,
      fetchData: 'users',
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
  [loadFailed]: (state, action)=> {
    return {
      ...state,
      loading: false,
    }
  }
}, initialState);