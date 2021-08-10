import { GET_BLOGS, GET_BLOGS_SUCCESS, GET_BLOGS_FAILURE } from './httpTypes';

const initialState = {
  loading: false,
  blogs: [],
  errors: '',
};

const messageReducer = (state = initialState, action) => {
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

export default messageReducer;
