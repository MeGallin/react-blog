import { combineReducers } from 'redux';
import { getReducer } from './httpBlog/httpBlogReducer';
import { deleteReducer } from './httpBlog/httpBlogReducer';
import { putReducer } from './httpBlog/httpBlogReducer';
import { postReducer } from './httpBlog/httpBlogReducer';
import registrationReducer from './httpPostRegistration/postRegistrationReducer';
import loginReducer from './login/loginReducer';
// import putReducer from './httpPut/putReducer';
// import deleteReducer from './httpDelete/deleteReducer';

const rootReducer = combineReducers({
  getReducer: getReducer,
  postReducer: postReducer,
  registrationReducer: registrationReducer,
  putReducer: putReducer,
  deleteReducer: deleteReducer,
  loginReducer: loginReducer,
});

export default rootReducer;
