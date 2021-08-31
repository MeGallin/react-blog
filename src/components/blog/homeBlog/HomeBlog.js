import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  getBlogsRequest,
  postLikeRequest,
  postDisLikeRequest,
} from '../../../redux';
import './HomeBlog.css';
import SearchInput from '../../searchInput/SearchInput';
import moment from 'moment';

function HomeBlog({
  blogs,
  getBlogsRequest,
  postLikeRequest,
  postDisLikeRequest,
}) {
  const [searchField, setSearchField] = useState('');
  const [showFullBlog, setShowFullBlog] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    getBlogsRequest();
  }, [getBlogsRequest]);

  const timeStamp = (date, format) => {
    return moment(date, format).fromNow();
  };

  const filteredBlogs = blogs.blogs.filter((blog) => {
    return blog.heading.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleLike = (id, name, heading, message, posted, likes, dislikes) => {
    const data = {
      id: id,
      name: name,
      heading: heading,
      message: message,
      posted: posted,
      likes: parseInt(likes) + 1,
      dislikes: dislikes,
    };
    setModalData(data);
    postLikeRequest(data);
  };

  const handleDisLike = (
    id,
    name,
    heading,
    message,
    posted,
    dislikes,
    likes,
  ) => {
    const data = {
      id: id,
      name: name,
      heading: heading,
      message: message,
      posted: posted,
      dislikes: parseInt(dislikes) + 1,
      likes: likes,
    };
    setModalData(data);
    postDisLikeRequest(data);
  };

  const handleViewBlog = (index) => {
    setShowFullBlog(true);
    setModalData(filteredBlogs[index]);
  };
  const handleCloseViewBlog = () => {
    setShowFullBlog(false);
  };

  return blogs.loading ? (
    <h2>Loading </h2>
  ) : blogs.error ? (
    <h2>{blogs.error}</h2>
  ) : (
    <div>
      {showFullBlog ? (
        <div className="modal__wrapper">
          <h3>{modalData.heading}</h3>
          <p dangerouslySetInnerHTML={{ __html: modalData.message }} />
          <p>{timeStamp(modalData.posted, 'YYYYMMDD, h:mm:ss a')}</p>
          <p>{modalData.name}</p>
          <div className="clap-wrapper">
            <div>
              <span
                className="likes"
                onClick={() =>
                  handleLike(
                    modalData.id,
                    modalData.name,
                    modalData.heading,
                    modalData.message,
                    modalData.posted,
                    modalData.likes,
                    modalData.dislikes,
                  )
                }
              >
                <i className="far fa-thumbs-up"></i>
                <span className="text-small">{modalData.likes}</span>
              </span>
            </div>
            <div>
              <span
                className="dislikes"
                onClick={() =>
                  handleDisLike(
                    modalData.id,
                    modalData.name,
                    modalData.heading,
                    modalData.message,
                    modalData.posted,
                    modalData.dislikes,
                    modalData.likes,
                  )
                }
              >
                <i className="far fa-thumbs-down"></i>
                <span className="text-small">{modalData.dislikes}</span>
              </span>
            </div>
          </div>
          <button type="button" onClick={() => handleCloseViewBlog()}>
            X
          </button>
        </div>
      ) : null}
      <div className={showFullBlog ? 'blog-wrapper' : null}>
        <SearchInput
          type="search"
          placeholder="Search a Title..."
          handleSearch={(e) => setSearchField(e.target.value)}
          className={searchField.length < 3 ? 'invalid' : 'entered'}
        />
        <hr />

        {filteredBlogs &&
          filteredBlogs &&
          filteredBlogs.map((blog, index) => (
            <React.Fragment key={blog.id}>
              <div>
                <h1>{blog.heading}</h1>
                <div className="text-wrapper">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: blog.message.slice(0, 80) + '...',
                    }}
                  ></p>
                  <span
                    onClick={() => handleViewBlog(index)}
                    className="read-more"
                  >
                    read more...
                  </span>
                </div>
                {blog.admin === '1' ? (
                  <div className="adminMessage">
                    <i className="fas fa-exclamation"></i> Edited by Admin
                  </div>
                ) : null}
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
    postDisLikeRequest: (data) => dispatch(postDisLikeRequest(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeBlog);
