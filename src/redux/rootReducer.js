import { combineReducers } from 'redux';
import getReducer from './httpGet/getReducer';

const rootReducer = combineReducers({
  getReducer: getReducer,
});

export default rootReducer;
