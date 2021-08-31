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
} from './httpBlogTypes';

// Get Actions
export const getBlogsRequest = () => {
  return (dispatch) => {
    dispatch(getBlogs);
    axios
      .get('http://localhost/reactBlogApi/getBlog.php')
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

// Delete Actions
export const deleteBlogRequest = (id) => {
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

// UPdate Actions
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

// Post Actions
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

// Post likes Action
export const postLikeRequest = (postData) => {
  return (dispatch) => {
    axios
      .put('http://localhost/reactBlogApi/addLike.php', postData)
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
      .put('http://localhost/reactBlogApi/addDisLike.php', postData)
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
