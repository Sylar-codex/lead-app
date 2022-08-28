import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoutes = (props) => {
  const { auth } = props;
  if (auth.isLoading) {
    return <h2>Loading...</h2>;
  } else if (!auth.isAuthenticated) {
    return <Navigate to="/login" />;
  } else {
    return <Outlet />;
  }
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoutes);
