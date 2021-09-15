import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../../redux';
import './LogoutButton.scss';

function LogoutButton({ loginRequest, userData }) {
  const [name, setName] = useState('');
  useEffect(() => {
    if (userData.isAuthorized && userData.userData.length !== 0) {
      setName(userData.userData[0].name);
    }
  }, [userData.isAuthorized, userData.userData]);
  const handleLogout = () => {
    loginRequest(false);
  };
  return (
    <React.Fragment>
      <div className="logout-button-wrapper">
        <button onClick={handleLogout}>logout</button>
        <div className="userDetails">User: {name}</div>
      </div>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => {
  return {
    userData: state.loginReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: () => dispatch(loginRequest()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);
