import { combineReducers } from 'redux';
import getReducer from './httpGet/getReducer';
import postReducer from './httpPost/postReducer';
import registrationReducer from './httpPostRegistration/postRegistrationReducer';
import putReducer from './httpPut/putReducer';
import deleteReducer from './httpDelete/deleteReducer';

const rootReducer = combineReducers({
  getReducer: getReducer,
  postReducer: postReducer,
  registrationReducer: registrationReducer,
  putReducer: putReducer,
  deleteReducer: deleteReducer,
});

export default rootReducer;
