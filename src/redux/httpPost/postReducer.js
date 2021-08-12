import { POST_BLOG_SUCCESS, POST_BLOG_FAILURE } from './postTypes';
const initialState = {
  loading: false,
  blog: [],
  errors: '',
};

const blogPostReducer = (state = initialState, action) => {
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

export default blogPostReducer;
