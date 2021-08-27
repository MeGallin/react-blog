import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css';
import LogoutButton from '../logoutButton/LogoutButton';

function Header(isAuthorized) {
  const [uuid, setUuid] = useState('');
  useEffect(() => {
    if (
      isAuthorized.isAuthorized &&
      isAuthorized.isAuthorized.userData.length !== 0
    ) {
      setUuid(isAuthorized.isAuthorized.userData[0].uuid);
    }
  }, [isAuthorized]);
  return (
    <header>
      <nav>
        <div>
          <Link to="/">Home</Link>
          {isAuthorized.isAuthorized.isAuthorized ? (
            <span>
              <Link to="/admin">Admin</Link>
              {uuid === 'fc6b6bfa-55a1-45df-85cb-8636092988b8' ? (
                <Link to="/register">Register</Link>
              ) : null}
            </span>
          ) : null}

          <Link to="/about">About</Link>
        </div>

        <div>
          {isAuthorized.isAuthorized.isAuthorized ? (
            <div>
              <LogoutButton />
            </div>
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
    isAuthorized: state.loginReducer,
  };
};

export default connect(mapStateToProps)(Header);
// Notes Do about error handling
// https://www.youtube.com/watch?v=aKOQtGLT-Yk
