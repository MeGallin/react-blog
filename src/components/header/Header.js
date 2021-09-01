import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
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
          <NavLink exact={true} to="/" activeClassName="is-active">
            Home
          </NavLink>
          {isAuthorized.isAuthorized.isAuthorized ? (
            <span>
              <NavLink to="/admin" activeClassName="is-active">
                Admin
              </NavLink>
              {uuid === 'fc6b6bfa-55a1-45df-85cb-8636092988b8' ? (
                <NavLink to="/register" activeClassName="is-active">
                  Register
                </NavLink>
              ) : null}
            </span>
          ) : null}

          <NavLink to="/about" activeClassName="is-active">
            About
          </NavLink>
        </div>

        <div>
          {isAuthorized.isAuthorized.isAuthorized ? (
            <div>
              <LogoutButton />
            </div>
          ) : (
            <button>
              <NavLink to="/login" activeClassName="is-active">
                Login
              </NavLink>
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
