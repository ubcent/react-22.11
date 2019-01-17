import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage'

import rootReducer from 'reducers';

const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, rootReducer)

const logger = (store) => (next) => (action) => {
  const state = store.getState();
  console.log('prev state', state);
  console.log('action', action);
  const result = next(action);
  console.log('next state', store.getState());

  return result;
}

export const store = createStore(
  persistedReducer,
  applyMiddleware(thunk, logger),
);

export const persistor = persistStore(store)