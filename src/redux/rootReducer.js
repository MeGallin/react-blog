import { combineReducers } from 'redux';
import getReducer from './httpGet/getReducer';
import postReducer from './httpPost/postReducer';

const rootReducer = combineReducers({
  getReducer: getReducer,
  postReducer: postReducer,
});

export default rootReducer;
