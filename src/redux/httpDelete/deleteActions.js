import axios from 'axios';
import { DELETE_BLOG_SUCCESS, DELETE_BLOG_FAILURE } from './deleteTypes';
import { getBlogsRequest } from '../httpGet/getActions';

export const deleteBlogRequest = (id) => {
  console.log('from delete function xcalling', id);
  return (dispatch) => {
    axios
      .delete('http://localhost/reactBlogApi/delete.php?id=' + id)
      .then(() => {
        dispatch(deleteBlog(id));
        dispatch(getBlogsRequest()); // Get the added blog post
      })
      .catch((err) => {
        const errorMsg = err.message;
        dispatch(deleteBlogFailure(errorMsg));
      });
  };
};

export const deleteBlog = (id) => {
  return {
    type: DELETE_BLOG_SUCCESS,
    payload: id,
  };
};

export const deleteBlogFailure = (error) => {
  return {
    type: DELETE_BLOG_FAILURE,
    payload: error,
  };
};
