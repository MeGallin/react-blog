import { PUT_BLOG_SUCCESS, PUT_BLOG_FAILURE } from './putTypes';
const initialState = {
  loading: false,
  blog: [],
  errors: '',
};

const putReducer = (state = initialState, action) => {
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

export default putReducer;
