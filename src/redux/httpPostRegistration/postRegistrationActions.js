import axios from 'axios';
import {
  POST_REGISTRATION_SUCCESS,
  POST_REGISTRATION_FAILURE,
  POST_REGISTRATION_EXISTING_EMAIL,
  POST_REGISTRATION_CONFIRMATION,
} from './postRegistrationTypes';
import { getBlogsRequest } from '../httpBlog/httpBlogActions';

export const postRegistrationRequest = (registrationData, history) => {
  return (dispatch) => {
    axios
      .post(
        process.env.REACT_APP_POST_REGISTRATION_FORM_URL_PROD,
        registrationData,
      )
      .then((res) => {
        if (res.data.includes('email already exists') || !registrationData) {
          dispatch(existingEmail(true));
        } else {
          dispatch(postBlog(registrationData));
          dispatch(getBlogsRequest()); // Get the added blog post
          dispatch(existingEmail(false));
          // Redirect to login page
          history.push('/login');
          dispatch(registrationConfirmation(true));
          setTimeout(() => {
            dispatch(registrationConfirmation(false));
          }, 6000);
        }
      })
      .catch((err) => {
        console.log(err);
        const errorMsg = err.message;
        dispatch(postBlogFailure(errorMsg));
      });
  };
};

export const postBlog = (payload) => {
  return {
    type: POST_REGISTRATION_SUCCESS,
    payload: payload,
  };
};

export const postBlogFailure = (error) => {
  return {
    type: POST_REGISTRATION_FAILURE,
    payload: error,
  };
};

export const existingEmail = (payload) => {
  return {
    type: POST_REGISTRATION_EXISTING_EMAIL,
    payload: payload,
  };
};

export const registrationConfirmation = (payload) => {
  return {
    type: POST_REGISTRATION_CONFIRMATION,
    payload: payload,
  };
};
