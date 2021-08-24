import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postRegistrationRequest } from '../../redux';
import './RegistrationForm.css';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';

function RegistrationForm({ registration, postRegistrationRequest }) {
  const history = useHistory();
  const [legend] = useState('Registration Form');
  const [emailExistsMessage, setEmailExistsMessage] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [uuid] = useState(uuidv4());

  console.log(registration.existingEmailMessage);

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
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
          type="text"
          name="name"
        />
        <input
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          placeholder="surname"
          type="text"
          name="surname"
        />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
