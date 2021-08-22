import React, { useEffect, useState } from 'react';
import './Admin.css';
import { connect } from 'react-redux';
import { getBlogsRequest } from '../../../redux';
import { putBlogRequest } from '../../../redux';
import { deleteBlogRequest } from '../../../redux';
import BlogPostForm from '../../blogPostForm/BlogPostForm';

function Admin({
  blogs,
  getBlogsRequest,
  putBlogRequest,
  deleteBlogRequest,

  userData,
}) {
  const [displayForm, setDisplayForm] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [legend] = useState('Post Blog');
  const [admin, setAdmin] = useState(0);
  const [name, setName] = useState('');
  const [heading, setHeading] = useState('');
  const [message, setMessage] = useState('');
  const [showFormId, setShowFormId] = useState('');
  const [showDeleteId, setShowDeleteId] = useState('');

  useEffect(() => {
    getBlogsRequest();
  }, [getBlogsRequest]);

  const showForm = (id, name, heading, admin, message) => {
    setDisplayForm(true);
    setShowFormId(id);
    setName(name);
    setHeading(heading);
    setAdmin(admin);
    setMessage(message);
  };

  const showDeleteButtons = (id) => {
    setShowDeleteConfirmation(true);
    setShowDeleteId(id);
  };

  const handleDeleteConfirmation = (id) => {
    deleteBlogRequest(id);
    setShowDeleteConfirmation(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = {
      id: showFormId,
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
      <h2>Admin panel here</h2>

      <BlogPostForm />
      <div>
        {blogs.blogs &&
          blogs.blogs &&
          blogs.blogs.map((blog) => (
            <div key={blog.id}>
              <h1>
                {blog.heading}[{blog.id}]{blog.name}
              </h1>
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
                {displayForm && blog.id === showFormId ? (
                  <div>
                    <fieldset className="fieldSet">
                      <legend>{legend}</legend>
                      <form onSubmit={handleSubmit}>
                        <div>
                          <label htmlFor="id">
                            ID
                            <input
                              readOnly
                              value={userData.userData[0].uuid}
                              onChange={(e) => setShowFormId(e.target.value)}
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
                              value={
                                userData.userData[0].name +
                                userData.userData[0].surname
                              }
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
                <button onClick={() => showDeleteButtons(blog.id)}>
                  DELETE {blog.id}
                </button>

                {showDeleteConfirmation && blog.id === showDeleteId ? (
                  <div className="deleteConfirmationMessage">
                    <h1>Note: this could be a use case for a modal</h1>
                    <p>
                      Are you sure you want to delete{' '}
                      <span>
                        {blog.heading}[{blog.id}]
                      </span>
                    </p>
                    <button onClick={() => handleDeleteConfirmation(blog.id)}>
                      Yes, DELETE !
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
    userData: state.loginReducer,
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
