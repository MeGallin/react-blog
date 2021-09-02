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

const initialState = {
  loading: false,
  blogs: [],
  errors: '',
  likes: null,
  dislikes: null,
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

        errors: '',
      };
    case POST_BLOG_FAILURE:
      return {
        ...state,
        loading: false,

        errors: action.payload,
      };

    default:
      return state;
  }
};

export const postLikeReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_LIKE_SUCCESS:
      return {
        ...state,
        likes: action.payload,
      };
    case POST_LIKE_FAILURE:
      return {
        ...state,
        errors: action.payload,
      };

    default:
      return state;
  }
};

export const postDisLikeReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_DIS_LIKE_SUCCESS:
      return {
        ...state,
        dislikes: action.payload,
      };
    case POST_DIS_LIKE_FAILURE:
      return {
        ...state,
        errors: action.payload,
      };

    default:
      return state;
  }
};

// Contact me form data
export const postContactFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_CONTACT_FORM_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: '',
      };
    case POST_CONTACT_FORM_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

    default:
      return state;
  }
};

// export default { messageReducer, deleteReducer };
