import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';
import LogoutButton from '../logoutButton/LogoutButton';

function Header(isAuthorized) {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/register">Register</Link>
        <Link to="/about">About</Link>
        {isAuthorized.isAuthorized ? (
          <LogoutButton />
        ) : (
          <Link to="/login">Login</Link>
        )}
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
