import React, { useState } from 'react';
import { connect } from 'react-redux';
import './LoginForm.css';
import { loginRequest } from '../../redux';
import { useHistory } from 'react-router-dom';

function LoginForm({ loginRequest, loginUserAndPwdFailureMessage }) {
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
  return (
    <React.Fragment>
      <div className="failedLoginMessage">
        {loginUserAndPwdFailureMessage.loginUserAndPwdFailureMessage}
      </div>

      <fieldset className="fieldSet">
        <legend>{legend}</legend>
        <form onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            type="email"
            name="email"
          />
          <input
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            placeholder="pwd"
            type="password"
            name="pwd"
          />

          <button type="submit" value="submit">
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (formData, history) =>
      dispatch(loginRequest(formData, history)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);