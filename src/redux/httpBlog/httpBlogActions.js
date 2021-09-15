import axios from 'axios';

import {
  GET_BLOGS,
  GET_BLOGS_SUCCESS,
  GET_BLOGS_FAILURE,
  DELETE_BLOG_SUCCESS,
  DELETE_BLOG_FAILURE,
  PUT_BLOG_SUCCESS,
  PUT_BLOG_FAILURE,
  POST_BLOG_SUCCESS,
  POST_BLOG_FAILURE,
  POST_LIKE_SUCCESS,
  POST_LIKE_FAILURE,
  POST_DIS_LIKE_SUCCESS,
  POST_DIS_LIKE_FAILURE,
  POST_CONTACT_FORM_SUCCESS,
  POST_CONTACT_FORM_FAILURE,
} from './httpBlogTypes';

const {
  REACT_APP_GET_BLOGS_URL_PROD,
  REACT_APP_DELETE_BLOG_URL_PROD,
  REACT_APP_UPDATE_BLOG_URL_PROD,
  REACT_APP_ADD_BLOG_URL_PROD,
  REACT_APP_POST_LIKE_URL_PROD,
  REACT_APP_POST_DISLIKE_URL_PROD,
  REACT_APP_POST_CONTACT_FORM_URL_PROD,
} = process.env;

// HTTP Abort
export const abortConst = new AbortController();

// Get Actions
export const getBlogsRequest = () => {
  console.log(process.env.REACT_APP_GET_BLOGS_URL_PROD);
  return (dispatch) => {
    axios
      .get(REACT_APP_GET_BLOGS_URL_PROD, {
        signal: abortConst.signal,
      })
      .then((res) => {
        const blogs = res.data;
        dispatch(getBlogsSuccess(blogs));
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('FETCH ABORTED', err);
          const errorMsg = err.name;
          dispatch(getBlogsFailure(errorMsg));
        } else {
          const errorMsg = err.message;
          dispatch(getBlogsFailure(errorMsg));
        }
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

// Delete Actions
export const deleteBlogRequest = (id) => {
  return (dispatch) => {
    axios
      .delete(REACT_APP_DELETE_BLOG_URL_PROD + id)
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

// UPdate Actions
export const putBlogRequest = (putData) => {
  return (dispatch) => {
    axios
      .put(REACT_APP_UPDATE_BLOG_URL_PROD, putData)
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

// Post Actions
export const postBlogRequest = (postData) => {
  return (dispatch) => {
    axios
      .post(REACT_APP_ADD_BLOG_URL_PROD, postData)
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

// Post likes Action
export const postLikeRequest = (postData) => {
  return (dispatch) => {
    axios
      .put(REACT_APP_POST_LIKE_URL_PROD, postData)
      .then(() => {
        dispatch(postLike(postData.likes));
        dispatch(getBlogsRequest()); // Get the added blog post
      })
      .catch((err) => {
        console.log(err);
        const errorMsg = err.message;
        dispatch(postBlogFailure(errorMsg));
      });
  };
};
export const postLike = (payload) => {
  return {
    type: POST_LIKE_SUCCESS,
    payload: payload,
  };
};
export const postLikeFailure = (error) => {
  return {
    type: POST_LIKE_FAILURE,
    payload: error,
  };
};

// POST DIS-LIKES
export const postDisLikeRequest = (postData) => {
  return (dispatch) => {
    axios
      .put(REACT_APP_POST_DISLIKE_URL_PROD, postData)
      .then(() => {
        dispatch(postDisLike(postData.dislikes));
        dispatch(getBlogsRequest()); // Get the added blog post
      })
      .catch((err) => {
        console.log(err);
        const errorMsg = err.message;
        dispatch(postBlogFailure(errorMsg));
      });
  };
};
export const postDisLike = (payload) => {
  return {
    type: POST_DIS_LIKE_SUCCESS,
    payload: payload,
  };
};
export const postDisLikeFailure = (error) => {
  return {
    type: POST_DIS_LIKE_FAILURE,
    payload: error,
  };
};
// POST Contact form data
export const postContactFormRequest = (postData) => {
  return (dispatch) => {
    axios
      .post(REACT_APP_POST_CONTACT_FORM_URL_PROD, postData)
      .then(() => {
        dispatch(postContactFormSuccess(postData));
      })
      .catch((err) => {
        console.log(err);
        const errorMsg = err.message;
        dispatch(postContactFormFailure(errorMsg));
      });
  };
};

export const postContactFormSuccess = (payload) => {
  return {
    type: POST_CONTACT_FORM_SUCCESS,
    payload: payload,
  };
};
export const postContactFormFailure = (error) => {
  return {
    type: POST_CONTACT_FORM_FAILURE,
    payload: error,
  };
};
