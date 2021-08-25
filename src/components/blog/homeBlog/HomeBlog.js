import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getBlogsRequest } from '../../../redux';
import './HomeBlog.css';
import SearchInput from '../../searchInput/SearchInput';

function HomeBlog({ blogs, getBlogsRequest }) {
  const [searchField, setSearchField] = useState('');
  useEffect(() => {
    getBlogsRequest();
  }, [getBlogsRequest]);

  const filteredBlogs = blogs.blogs.filter((blog) => {
    return blog.heading.toLowerCase().includes(searchField.toLowerCase());
  });

  return blogs.loading ? (
    <h2>Loading </h2>
  ) : blogs.error ? (
    <h2>{blogs.error}</h2>
  ) : (
    <div>
      <h2>Blog List</h2>
      <SearchInput
        type="search"
        placeholder="Search a Title..."
        handleSearch={(e) => setSearchField(e.target.value)}
        className={searchField.length < 3 ? 'invalid' : 'entered'}
      />
      <div>
        {filteredBlogs &&
          filteredBlogs &&
          filteredBlogs.map((blog) => (
            <React.Fragment>
              {console.log(blog)}
              <div key={blog.id}>
                <h1>{blog.heading}</h1>
                <p dangerouslySetInnerHTML={{ __html: blog.message }} />
                <p>{blog.posted}</p>
                <p>{blog.name}</p>
              </div>
              <hr />
            </React.Fragment>
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
