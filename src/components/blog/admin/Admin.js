import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getBlogsRequest } from '../../../redux';
import { putBlogRequest } from '../../../redux';
import { deleteBlogRequest } from '../../../redux';
import BlogPostForm from '../../blogPostForm/BlogPostForm';

function Admin({ blogs, getBlogsRequest, putBlogRequest, deleteBlogRequest }) {
  const [displayForm, setDisplayForm] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [legend] = useState('Post Blog');
  const [admin, setAdmin] = useState(0);
  const [name, setName] = useState('');
  const [heading, setHeading] = useState('');
  const [message, setMessage] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    getBlogsRequest();
  }, [getBlogsRequest]);

  const showForm = (id, name, heading, admin, message) => {
    setDisplayForm(true);
    setId(id);
    setName(name);
    setHeading(heading);
    setAdmin(admin);
    setMessage(message);
  };

  const handleDeleteConfirmation = (id) => {
    deleteBlogRequest(id);
    setShowDeleteConfirmation(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = {
      id: id,
      name: name,
      heading: heading,
      admin: admin,
      message: message,
    };

    putBlogRequest(formData);
    setDisplayForm(false);
  };

  return blogs.loading ? (
    <h2>Loading </h2>
  ) : blogs.error ? (
    <h2>{blogs.error}</h2>
  ) : (
    <section>
      <h2>Admin panel</h2>
      <BlogPostForm />
      <div>
        {blogs.blogs &&
          blogs.blogs &&
          blogs.blogs.map((blog) => (
            <div key={blog.id}>
              {heading ? (
                <h1>
                  {heading}[{blog.id}]
                </h1>
              ) : (
                <h1>
                  {blog.heading}[{blog.id}]
                </h1>
              )}

              <p dangerouslySetInnerHTML={{ __html: blog.message }} />
              <p>{blog.posted}</p>
              <p>{blog.name}</p>
              <p>{blog.uuid}</p>
              <div>
                {!displayForm ? (
                  <button
                    onClick={() =>
                      showForm(
                        blog.id,
                        blog.name,
                        blog.heading,
                        blog.admin,
                        blog.message,
                      )
                    }
                  >
                    EDIT
                  </button>
                ) : (
                  <button onClick={() => setDisplayForm(false)}>Cancel</button>
                )}
                {displayForm && blog.id === id ? (
                  <div>
                    <fieldset className="fieldSet">
                      <legend>{legend}</legend>
                      <form onSubmit={handleSubmit}>
                        <div>
                          <label htmlFor="id">
                            ID
                            <input
                              readOnly
                              value={id}
                              onChange={(e) => setId(e.target.value)}
                              type="text"
                              name="uuid"
                            />
                          </label>
                        </div>

                        <div>
                          <label htmlFor="name">
                            Name
                            <input
                              readOnly
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              type="text"
                              name="name"
                            />
                          </label>
                        </div>
                        <div>
                          <label htmlFor="heading">
                            Heading
                            <input
                              value={heading}
                              onChange={(e) => setHeading(e.target.value)}
                              type="text"
                              name="heading"
                            />
                          </label>
                        </div>
                        <div>
                          <label htmlFor="admin">
                            Admin
                            <input
                              value={admin}
                              onChange={(e) => setAdmin(e.target.value)}
                              type="number"
                              max="1"
                              min="0"
                              name="admin"
                            />
                          </label>
                        </div>
                        <div>
                          <label htmlFor="message">
                            Message
                            <textarea
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              type="text"
                              name="message"
                            />
                          </label>
                        </div>

                        <button type="submit" value="submit">
                          Submit
                        </button>
                      </form>
                    </fieldset>
                  </div>
                ) : null}
                <button onClick={() => setShowDeleteConfirmation(true)}>
                  DELETE
                </button>
                {showDeleteConfirmation ? (
                  <div>
                    Note: this could be a use case for a modal
                    <span>
                      Are you sure you want to delete <h3>{blog.heading}</h3>
                    </span>
                    <button onClick={() => handleDeleteConfirmation(blog.id)}>
                      Yes, confirm
                    </button>
                    <button onClick={() => setShowDeleteConfirmation(false)}>
                      No Thanks
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    blogs: state.getReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getBlogsRequest: () => dispatch(getBlogsRequest()),
    putBlogRequest: (formData) => dispatch(putBlogRequest(formData)),
    deleteBlogRequest: (id) => dispatch(deleteBlogRequest(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
