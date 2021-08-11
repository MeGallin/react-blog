import React, { useState } from 'react';
import { connect } from 'react-redux';

import './BlogPostForm.css';

function BlogPostForm() {
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
    console.log(formData);
  };
  return (
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
    </div>
  );
}

export default BlogPostForm;
