import {
  POST_REGISTRATION_SUCCESS,
  POST_REGISTRATION_FAILURE,
  POST_REGISTRATION_EXISTING_EMAIL,
  POST_REGISTRATION_CONFIRMATION,
} from './postRegistrationTypes';

const initialState = {
  loading: false,
  registration: [],
  errors: '',
  existingEmailMessage: false,
  registrationConfirmationMessage: false,
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
    case POST_REGISTRATION_EXISTING_EMAIL:
      return {
        ...state,
        existingEmailMessage: action.payload,
      };
    case POST_REGISTRATION_CONFIRMATION:
      return {
        ...state,
        registrationConfirmationMessage: action.payload,
      };

    default:
      return state;
  }
};

export default registrationReducer;
