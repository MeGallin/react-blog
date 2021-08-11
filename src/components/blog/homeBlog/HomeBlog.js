import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBlogsRequest } from '../../../redux';
import './HomeBlog.css';

function HomeBlog({ blogs, getBlogsRequest }) {
  useEffect(() => {
    getBlogsRequest();
  }, [getBlogsRequest]);
  return blogs.loading ? (
    <h2>Loading </h2>
  ) : blogs.error ? (
    <h2>{blogs.error}</h2>
  ) : (
    <div>
      <h2>Blog List</h2>
      <div>
        {blogs.blogs &&
          blogs.blogs &&
          blogs.blogs.map((blog) => (
            <div key={blog.id}>
              <h1>{blog.heading}</h1>
              <p dangerouslySetInnerHTML={{ __html: blog.message }} />
            </div>
          ))}
      </div>
    </div>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeBlog);
