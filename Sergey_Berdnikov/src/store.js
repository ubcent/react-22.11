import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'reducers'

/** СОздаем store
 * В качестве параметров передаем, корневой (комбинированны) редусер
 * и так же применяем middleware в лице thunk'a
 */
export default createStore(
    rootReducer,
    applyMiddleware(thunk),
);
