import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';
import LogoutButton from '../logoutButton/LogoutButton';

function Header(isAuthorized) {
  return (
    <header>
      <nav>
        <div>
          <Link to="/">Home</Link>
          {isAuthorized.isAuthorized ? (
            <span>
              <Link to="/admin">Admin</Link>
              <Link to="/register">Register</Link>
            </span>
          ) : null}

          <Link to="/about">About</Link>
        </div>

        <div>
          {isAuthorized.isAuthorized ? (
            <LogoutButton />
          ) : (
            <button>
              <Link to="/login">Login</Link>
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthorized: state.loginReducer.isAuthorized,
  };
};

export default connect(mapStateToProps)(Header);
// Notes Do about error handling
// https://www.youtube.com/watch?v=aKOQtGLT-Yk
