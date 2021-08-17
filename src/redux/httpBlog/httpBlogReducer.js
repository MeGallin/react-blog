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
} from './httpBlogTypes';

const initialState = {
  loading: false,
  blogs: [],
  errors: '',
};

export const getReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BLOGS:
      return {
        ...state,
        loading: true,
      };

    case GET_BLOGS_SUCCESS:
      return {
        ...state,
        loading: false,
        blogs: action.payload,
        errors: '',
      };

    case GET_BLOGS_FAILURE:
      return {
        ...state,
        loading: false,
        blogs: [],
        errors: action.payload,
      };

    default:
      return state;
  }
};

export const deleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_BLOG_SUCCESS:
      return {
        ...state,
        blog: [],
      };
    case DELETE_BLOG_FAILURE:
      return {
        ...state,
        loading: false,
        blog: [],
        errors: action.payload,
      };
    default:
      return state;
  }
};

export const putReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        payload: action.payload,
        errors: '',
      };
    case PUT_BLOG_FAILURE:
      return {
        ...state,
        loading: false,
        blog: [],
        errors: action.payload,
      };

    default:
      return state;
  }
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_BLOG_SUCCESS:
      return {
        ...state,
        loading: false,
        payload: action.payload,
        errors: '',
      };
    case POST_BLOG_FAILURE:
      return {
        ...state,
        loading: false,
        blog: [],
        errors: action.payload,
      };

    default:
      return state;
  }
};

// export default { messageReducer, deleteReducer };
