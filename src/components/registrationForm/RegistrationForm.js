import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postRegistrationRequest } from '../../redux';
import './RegistrationForm.css';
import { v4 as uuidv4 } from 'uuid';

function RegistrationForm(props) {
  const [legend] = useState('Registration Form');
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

    props.postRegistrationRequest(formData);
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
    </fieldset>
  );
}

const mapStateToProps = (state) => {
  return {
    registration: state.postRegistrationReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postRegistrationRequest: (formData) =>
      dispatch(postRegistrationRequest(formData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
