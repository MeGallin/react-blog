import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postRegistrationRequest, postRegistrationEmail } from '../../redux';
import './RegistrationForm.scss';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import FormInputs from '../formInputs/FormInputs';

const nameRegEx = /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{2,}$/;
const emailRegEx =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
const pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;

function RegistrationForm({
  registration,
  postRegistrationRequest,
  postRegistrationEmail,
}) {
  const history = useHistory();
  const [legend] = useState('Registration Form');
  const [emailExistsMessage, setEmailExistsMessage] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [uuid] = useState(uuidv4());

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = {
      name: name,
      surname: surname,
      email: email,
      pwd: pwd,
      uuid: uuid,
    };
    postRegistrationRequest(formData, history);
    postRegistrationEmail(formData);
    if (registration.existingEmailMessage) {
      setName('');
      setSurname('');
      setEmail('');
      setPwd('');
      setEmailExistsMessage('');
    } else {
      setEmailExistsMessage(
        'Sorry, that email is already in use. Please use another email address.',
      );
    }
  };

  return (
    <fieldset className="fieldSet">
      <legend>{legend}</legend>

      <form onSubmit={handleSubmit}>
        <FormInputs
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          required
          className={!nameRegEx.test(name) ? 'invalid' : 'entered'}
          error={
            !nameRegEx.test(name) && name.length !== 0
              ? `Name field must start with an uppercase letter and contain at least 3 letters and have no white space.`
              : null
          }
        />

        <FormInputs
          label="Surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          type="text"
          name="surname"
          required
          className={!nameRegEx.test(surname) ? 'invalid' : 'entered'}
          error={
            !nameRegEx.test(surname) && surname.length !== 0
              ? `Surname field must start with an uppercase letter and contain at least 3 letters and have no white space.`
              : null
          }
        />

        <FormInputs
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          required
          className={!emailRegEx.test(email) ? 'invalid' : 'entered'}
          error={
            !emailRegEx.test(email) && email.length !== 0
              ? `Invalid email address.`
              : null
          }
        />

        <FormInputs
          label="Password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          type="password"
          name="pwd"
          required
          className={!pwdRegex.test(pwd) ? 'invalid' : 'entered'}
          error={
            !pwdRegex.test(pwd) && pwd.length !== 0
              ? `Password must have at least 1 uppercase letter, a number and have a minimum length of 6.`
              : null
          }
        />

        <button
          type="submit"
          value="submit"
          disabled={
            !nameRegEx.test(name) ||
            !nameRegEx.test(surname) ||
            !emailRegEx.test(email) ||
            !pwdRegex.test(pwd)
          }
        >
          Submit
        </button>
      </form>
      <div>
        <div className="failedLoginMessage">{emailExistsMessage}</div>
      </div>
    </fieldset>
  );
}

const mapStateToProps = (state) => {
  return {
    registration: state.registrationReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postRegistrationRequest: (formData, history) =>
      dispatch(postRegistrationRequest(formData, history)),
    postRegistrationEmail: (formData) =>
      dispatch(postRegistrationEmail(formData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
