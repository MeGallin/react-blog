import {
  POST_REGISTRATION_SUCCESS,
  POST_REGISTRATION_FAILURE,
  POST_REGISTRATION_EXISTING_EMAIL,
  POST_REGISTRATION_CONFIRMATION,
  POST_REGISTRATION_CONFIRMATION_EMAIL,
  POST_REGISTRATION_CONFIRMATION_EMAIL_FAILURE,
} from './postRegistrationTypes';

const initialState = {
  loading: false,
  registration: [],
  registrationEmail: false,
  errors: '',
  existingEmailMessage: false,
  registrationConfirmationMessage: false,
};

const registrationReducer = (state = initialState, action) => {
  // console.log(action.type);
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
    case POST_REGISTRATION_CONFIRMATION_EMAIL:
      return {
        ...state,
        registrationEmail: true,
      };
    case POST_REGISTRATION_CONFIRMATION_EMAIL_FAILURE:
      return {
        ...state,
        errors: '',
      };

    default:
      return state;
  }
};

export default registrationReducer;
