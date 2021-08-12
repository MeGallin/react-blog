import {
  POST_REGISTRATION_SUCCESS,
  POST_REGISTRATION_FAILURE,
} from './postRegistrationTypes';

const initialState = {
  loading: false,
  registration: [],
  errors: '',
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_REGISTRATION_SUCCESS:
      return {
        ...state,
        loading: false,
        payload: action.payload,
        errors: '',
      };
    case POST_REGISTRATION_FAILURE:
      return {
        ...state,
        loading: false,
        registration: [],
        errors: action.payload,
      };

    default:
      return state;
  }
};

export default registrationReducer;
