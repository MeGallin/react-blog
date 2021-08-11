import axios from 'axios';
import { GET_BLOGS, GET_BLOGS_SUCCESS, GET_BLOGS_FAILURE } from './getTypes';

export const getBlogsRequest = () => {
  return (dispatch) => {
    dispatch(getBlogs);
    axios
      .get(
        'http://localhost/WebSitesDesigns/reactJs/react-redux-demo/src/assets/api/getBlog.php',
      )
      .then((res) => {
        const blogs = res.data;
        dispatch(getBlogsSuccess(blogs));
      })
      .catch((err) => {
        console.log(err);
        const errorMsg = err.message;
        dispatch(getBlogsFailure(errorMsg));
      });
  };
};

export const getBlogs = () => {
  return {
    type: GET_BLOGS,
  };
};

export const getBlogsSuccess = (blogs) => {
  return {
    type: GET_BLOGS_SUCCESS,
    payload: blogs,
  };
};

export const getBlogsFailure = (error) => {
  return {
    type: GET_BLOGS_FAILURE,
    payload: error,
  };
};
