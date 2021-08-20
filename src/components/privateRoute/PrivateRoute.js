import React from 'react';
import { Redirect, Route, useLocation, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

function PrivateRoute({ isAuthorized, component: Component, ...rest }) {
  const location = useLocation();

  return (
    <Route {...rest}>
      {isAuthorized === true ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: location } }} />
      )}
    </Route>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthorized: state.loginReducer.isAuthorized,
  };
};

export default withRouter(connect(mapStateToProps)(PrivateRoute));
