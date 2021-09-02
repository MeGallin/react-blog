import React, { useState } from 'react';
import './ContactForm.css';
import FormInputs from '../formInputs/FormInputs';
import { connect } from 'react-redux';
import { postContactFormRequest } from '../../redux';

const nameRegEx = /^(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{2,}$/;
const emailRegEx =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

function ContactForm({ postContactFormRequest }) {
  const [legend] = useState('Contact form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };

    postContactFormRequest(data);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <React.Fragment>
      <fieldset className="fieldSet">
        <legend>{legend}</legend>
        <form onSubmit={handleSubmit}>
          <div></div>
          <div>
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
          </div>
          <div>
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
          </div>

          <div>
            <label htmlFor="message">
              Blog
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                type="text"
                name="message"
                className={message.length < 10 ? 'invalid' : 'entered'}
              />
            </label>
          </div>
          <button
            type="submit"
            value="submit"
            disabled={
              !nameRegEx.test(name) ||
              !emailRegEx.test(email) ||
              message.length < 10
            }
          >
            Submit
          </button>
        </form>
      </fieldset>
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    postContactFormRequest: (formData) =>
      dispatch(postContactFormRequest(formData)),
  };
};

export default connect('', mapDispatchToProps)(ContactForm);
