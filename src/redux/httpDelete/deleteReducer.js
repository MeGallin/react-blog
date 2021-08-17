import { DELETE_BLOG_SUCCESS, DELETE_BLOG_FAILURE } from './deleteTypes';

const initialState = {
  loading: false,
  blog: [],
  errors: '',
};

const deleteReducer = (state = initialState, action) => {
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

export default deleteReducer;
