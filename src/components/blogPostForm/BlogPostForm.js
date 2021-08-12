import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postBlogRequest } from '../../redux';
import HomeBlog from '../blog/homeBlog/HomeBlog';
import './BlogPostForm.css';

function BlogPostForm(props) {
  const [legend] = useState('Post Blog');
  const [uuid, setUuid] = useState('');
  const [name, setName] = useState('');
  const [heading, setHeading] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = {
      uuid: uuid,
      name: name,
      heading: heading,
      message: message,
    };
    props.postBlogRequest(formData);
  };
  return props.blog.errors ? (
    <div>
      <h1>{props.blog.errors}</h1>
    </div>
  ) : (
    <div>
      <fieldset className="fieldSet">
        <legend>{legend}</legend>
        <form onSubmit={handleSubmit}>
          <input
            value={uuid}
            onChange={(e) => setUuid(e.target.value)}
            placeholder="uuid"
            type="text"
            name="uuid"
          />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
            type="text"
            name="name"
          />
          <input
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            placeholder="heading"
            type="text"
            name="heading"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="message"
            type="text"
            name="message"
          />
          <button type="submit" value="submit">
            Submit
          </button>
        </form>
      </fieldset>
      <HomeBlog />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    blog: state.postReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postBlogRequest: (formData) => dispatch(postBlogRequest(formData)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BlogPostForm);
