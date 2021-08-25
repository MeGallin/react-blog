import React, { useState } from 'react';
import { connect } from 'react-redux';
import './LoginForm.css';
import { loginRequest } from '../../redux';
import { useHistory } from 'react-router-dom';
import FormInputs from '../formInputs/FormInputs';

const emailRegEx =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
const pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;

function LoginForm({
  loginRequest,
  loginUserAndPwdFailureMessage,
  registrationConfirmation,
}) {
  const history = useHistory();
  const [legend] = useState('Login Form');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = {
      email: email,
      pwd: pwd,
    };
    loginRequest(formData, history);
  };
  const showRegistrationMessage = () => {
    return registrationConfirmation.registrationConfirmationMessage ? (
      <div>
        <p className="successMessage">You have successfully been registered.</p>
        <p className="successMessage">Please login.</p>
      </div>
    ) : null;
  };
  return (
    <React.Fragment>
      <div className="failedLoginMessage">
        {loginUserAndPwdFailureMessage.loginUserAndPwdFailureMessage}
      </div>

      {showRegistrationMessage()}
      <fieldset className="fieldSet">
        <legend>{legend}</legend>
        <form onSubmit={handleSubmit}>
          <FormInputs
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            required
            className={!emailRegEx.test(email) ? 'invalid' : 'entered'}
          />
          <FormInputs
            label="Password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            type="password"
            name="pwd"
            required
            className={!pwdRegex.test(pwd) ? 'invalid' : 'entered'}
          />
          <p></p>
          <button
            type="submit"
            value="submit"
            disabled={!emailRegEx.test(email) || !pwdRegex.test(pwd)}
          >
            Submit
          </button>
        </form>
      </fieldset>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthorized: state.loginReducer,
    loginUserAndPwdFailureMessage: state.loginReducer,
    registrationConfirmation: state.registrationReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (formData, history) =>
      dispatch(loginRequest(formData, history)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
