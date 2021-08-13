import axios from 'axios';
import { PUT_BLOG_SUCCESS, PUT_BLOG_FAILURE } from './putTypes';
import { getBlogsRequest } from '../httpGet/getActions';

export const putBlogRequest = (putData) => {
  return (dispatch) => {
    axios
      .put('http://localhost/reactBlogApi/update.php', putData)
      .then(() => {
        dispatch(putBlog(putData));
        dispatch(getBlogsRequest()); // Get the added blog post
      })
      .catch((err) => {
        console.log(err);
        const errorMsg = err.message;
        dispatch(putBlogFailure(errorMsg));
      });
  };
};

export const putBlog = (payload) => {
  return {
    type: PUT_BLOG_SUCCESS,
    payload: payload,
  };
};

export const putBlogFailure = (error) => {
  return {
    type: PUT_BLOG_FAILURE,
    payload: error,
  };
};
