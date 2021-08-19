import axios from 'axios';
import {
  LOGIN_BLOG_SUCCESS,
  LOGIN_BLOG_FAILURE,
  LOGIN_USER_AND_PWD_FAILURE_MESSAGE,
} from './loginTypes';

export const loginRequest = (userData, history) => {
  return (dispatch) => {
    axios
      .post('http://localhost/reactBlogApi/login.php', userData)
      .then((res) => {
        const response = res.data;

        if (response.length === 0) {
          const errorMessage = 'Wrong Username or Password';
          dispatch(userPwdFailure(errorMessage));
        } else {
          if (response[0].email === userData.email && userData.pwd) {
            dispatch(loginSuccess(true));
            history.push('/admin');
          }
        }
      })
      .catch((err) => {
        console.log(err);
        const errorMsg = err.message;
        dispatch(loginFailure(errorMsg));
      });
  };
};

export const loginSuccess = (isAuthorized) => {
  return {
    type: LOGIN_BLOG_SUCCESS,
    payload: isAuthorized,
  };
};

export const loginFailure = (isAuthorized) => {
  return {
    type: LOGIN_BLOG_FAILURE,
    payload: isAuthorized,
  };
};

export const userPwdFailure = (failed) => {
  console.log(failed);
  return {
    type: LOGIN_USER_AND_PWD_FAILURE_MESSAGE,
    payload: failed,
  };
};
