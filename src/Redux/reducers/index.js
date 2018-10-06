import {combineReducers} from 'redux';
import tvReducer from './tvReducer.js';


const allReducers = combineReducers({
    tvReducer: tvReducer
})

export default allReducers;