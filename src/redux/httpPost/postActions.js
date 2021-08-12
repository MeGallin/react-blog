import axios from 'axios';
import { POST_BLOG_SUCCESS, POST_BLOG_FAILURE } from './postTypes';
import { getBlogsRequest } from '../httpGet/getActions';

export const postBlogRequest = (postData) => {
  return (dispatch) => {
    axios
      .post('http://localhost/reactBlogApi/addBlog.php', postData)
      .then(() => {
        dispatch(postBlog(postData));
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
    type: POST_BLOG_SUCCESS,
    payload: payload,
  };
};

export const postBlogFailure = (error) => {
  return {
    type: POST_BLOG_FAILURE,
    payload: error,
  };
};
