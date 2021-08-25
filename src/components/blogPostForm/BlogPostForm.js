import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { postBlogRequest } from '../../redux';
import './BlogPostForm.css';
import FormInputs from '../formInputs/FormInputs';

function BlogPostForm({ blog, userData, postBlogRequest }) {
  const [legend] = useState('Post Blog');
  const [uuid, setUuid] = useState('');
  const [name, setName] = useState('');
  const [heading, setHeading] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (userData.isAuthorized && userData.userData.length !== 0) {
      setUuid(userData.userData[0].uuid);
      setName(userData.userData[0].name);
    }
  }, [userData.isAuthorized, userData.userData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = {
      uuid: uuid,
      name: name,
      heading: heading,
      message: message,
    };
    postBlogRequest(formData);
    setHeading('');
    setMessage('');
  };

  return blog.errors ? (
    <div>
      <h1>{blog.errors}</h1>
    </div>
  ) : (
    <div>
      <fieldset className="fieldSet">
        <legend>{legend}</legend>
        <form onSubmit={handleSubmit}>
          <FormInputs
            label="UUID"
            readOnly
            value={uuid}
            onChange={(e) => setUuid(e.target.value)}
            placeholder="uuid"
            type="text"
            name="uuid"
            className={!uuid ? 'invalid' : 'entered'}
          />

          <FormInputs
            readOnly
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            className={!name ? 'invalid' : 'entered'}
          />

          <FormInputs
            label="Heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            type="text"
            name="heading"
            className={!heading.length ? 'invalid' : 'entered'}
          />
          <label for="message">
            Blog
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              type="text"
              name="message"
              className={message.length < 10 ? 'invalid' : 'entered'}
            />
          </label>
          <button type="submit" value="submit">
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    blog: state.postReducer,
    userData: state.loginReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postBlogRequest: (formData) => dispatch(postBlogRequest(formData)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BlogPostForm);
