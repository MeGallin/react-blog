import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getBlogsRequest, postLikeRequest } from '../../../redux';
import './HomeBlog.css';
import SearchInput from '../../searchInput/SearchInput';

function HomeBlog({ blogs, getBlogsRequest, postLikeRequest }) {
  const [searchField, setSearchField] = useState('');
  useEffect(() => {
    getBlogsRequest();
  }, [getBlogsRequest]);

  const filteredBlogs = blogs.blogs.filter((blog) => {
    return blog.heading.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleLikes = (id, name, heading, message, likes) => {
    const data = {
      id: id,
      name: name,
      heading: heading,
      message: message,
      likes: parseInt(likes) + 1,
    };
    console.log(data);
    postLikeRequest(data);
  };

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
      <hr />
      <div>
        {filteredBlogs &&
          filteredBlogs &&
          filteredBlogs.map((blog) => (
            <React.Fragment key={blog.id}>
              <div>
                <h1>{blog.heading}</h1>
                <p dangerouslySetInnerHTML={{ __html: blog.message }} />
                <p>{blog.posted}</p>
                <p>{blog.name}</p>
                <div className="clap-wrapper">
                  <div>
                    <span
                      className="likes"
                      onClick={() =>
                        handleLikes(
                          blog.id,
                          blog.name,
                          blog.heading,
                          blog.message,
                          blog.likes,
                        )
                      }
                    >
                      <i className="far fa-thumbs-up"></i>
                      <span className="text-small">{blog.likes}</span>
                    </span>
                  </div>
                  <div>
                    <span className="dislikes">
                      <i className="far fa-thumbs-down"></i>
                      <span className="text-small">{blog.dislikes}</span>
                    </span>
                  </div>
                </div>
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
    postLikeRequest: (data) => dispatch(postLikeRequest(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeBlog);
