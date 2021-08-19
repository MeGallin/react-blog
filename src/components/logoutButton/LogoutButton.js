import React from 'react';
import { connect } from 'react-redux';
import { loginRequest } from '../../redux';
import './LogoutButton css';

function LogoutButton({ loginRequest }) {
  const handleLogout = () => {
    loginRequest(false);
  };
  return <button onClick={handleLogout}>logout</button>;
}
const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: () => dispatch(loginRequest()),
  };
};
export default connect(null, mapDispatchToProps)(LogoutButton);
