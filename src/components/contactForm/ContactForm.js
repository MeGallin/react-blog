import React, { useState } from 'react';
import './ContactForm.scss';
import FormInputs from '../formInputs/FormInputs';
import { connect } from 'react-redux';
import { postContactFormRequest } from '../../redux';

const nameRegEx = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
const emailRegEx =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

function ContactForm({ postContactFormRequest }) {
  const [legend] = useState('Contact form');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [thankYou, setThankYou] = useState(false);
  const [tempName, setTempName] = useState('');

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
    setTempName(name);

    setThankYou(true);
    setTimeout(() => {
      setThankYou(false);
      setTempName('');
    }, 6000);
  };

  return (
    <React.Fragment>
      {thankYou ? (
        <div className="contact-form">
          Thanks {tempName} for reaching out. We will be in contact shortly.
        </div>
      ) : null}
      <fieldset className="fieldSet">
        <legend className="contact-form">{legend}</legend>
        <form onSubmit={handleSubmit} className="form-wrapper">
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
              Message
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
