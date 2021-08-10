import { combineReducers } from 'redux';
import httpReducer from './http/httpReducer';

const rootReducer = combineReducers({
  httpReducer: httpReducer,
});

export default rootReducer;
