import axios from 'axios';
import {
  POST_REGISTRATION_SUCCESS,
  POST_REGISTRATION_FAILURE,
} from './postRegistrationTypes';
import { getBlogsRequest } from '../httpBlog/httpBlogActions';

export const postRegistrationRequest = (registrationData) => {
  return (dispatch) => {
    axios
      .post('http://localhost/reactBlogApi/register.php', registrationData)
      .then(() => {
        dispatch(postBlog(registrationData));
        dispatch(getBlogsRequest()); // Get the added blog post
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
