import { combineReducers } from 'redux';
import getReducer from './httpGet/getReducer';
import postReducer from './httpPost/postReducer';
import registrationReducer from './httpPostRegistration/postRegistrationReducer';

const rootReducer = combineReducers({
  getReducer: getReducer,
  postReducer: postReducer,
  registrationReducer: registrationReducer,
});

export default rootReducer;
