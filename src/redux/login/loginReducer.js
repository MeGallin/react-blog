import {
  LOGIN_BLOG_SUCCESS,
  LOGIN_BLOG_FAILURE,
  LOGIN_USER_AND_PWD_FAILURE_MESSAGE,
  LOGOUT_SUCCESS,
  USER_DATA,
} from './loginTypes';

const initialState = {
  isAuthorized: false,
  loginUserAndPwdFailureMessage: '',
  userData: [],
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
        userData: [],
      };
    case LOGIN_USER_AND_PWD_FAILURE_MESSAGE:
      return {
        ...state,
        loginUserAndPwdFailureMessage: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthorized: action.payload,
      };
    case USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };

    default:
      return state;
  }
};

// export const logoutReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case LOGOUT_SUCCESS:
//       return {
//         ...state,
//         isAuthorized: action.payload,
//       };

//     default:
//       return state;
//   }
// };

export default loginReducer;
