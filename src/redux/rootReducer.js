import { combineReducers } from 'redux';
import getReducer from './httpGet/getReducer';
import postReducer from './httpPost/postReducer';
import registrationReducer from './httpPostRegistration/postRegistrationReducer';
import putReducer from './httpPut/putReducer';

const rootReducer = combineReducers({
  getReducer: getReducer,
  postReducer: postReducer,
  registrationReducer: registrationReducer,
  putReducer: putReducer,
});

export default rootReducer;
