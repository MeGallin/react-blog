import {
  LOGIN_BLOG_SUCCESS,
  LOGIN_BLOG_FAILURE,
  LOGIN_USER_AND_PWD_FAILURE_MESSAGE,
} from './loginTypes';

const initialState = {
  isAuthorized: false,
  loginUserAndPwdFailureMessage: '',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_BLOG_SUCCESS:
      return {
        ...state,
        isAuthorized: true,
        loginUserAndPwdFailureMessage: '',
      };

    case LOGIN_BLOG_FAILURE:
      return {
        ...state,
        isAuthorized: false,
      };
    case LOGIN_USER_AND_PWD_FAILURE_MESSAGE:
      return {
        ...state,
        loginUserAndPwdFailureMessage: action.payload,
      };

    default:
      return state;
  }
};

export default loginReducer;
