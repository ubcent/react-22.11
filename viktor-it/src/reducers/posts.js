import {handleActions} from 'redux-actions';
import {loadStarted, loadCompleted, loadFailed} from 'actions/posts';

const initialState = {
  loading: false,
  postsArr: [],
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
  	  postsArr: state.postsArr.concat(action.payload),
  	};
  },
  [loadFailed]: (state, action) => {
  	return{
  	  ...state,
  	  loading: false,
  	};
  },
}, initialState);