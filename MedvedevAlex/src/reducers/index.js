import {combineReducers} from 'redux';

import commentsReducer from './fetchData';

export default combineReducers ({
  connection: commentsReducer,
})