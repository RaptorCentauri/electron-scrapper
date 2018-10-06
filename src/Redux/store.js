import allReducers from './reducers/index.js'
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk'

const store = createStore(allReducers, {}, applyMiddleware(createLogger(), ReduxThunk));

export default store;