import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <span className="navbar-text">
          <strong>{user ? `Welcome ${user.username}` : ""}</strong>
        </span>
        <li className="nav-item btn btn-secondary">
          <button
            onClick={this.props.logout}
            className="nav-link btn btn-primary"
          >
            Logout
          </button>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul>
        <li className="flex-sm-fill text-sm-center nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
        <li className="flex-sm-fill text-sm-center nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    );
    return (
      <nav className="nav nav-pills flex-column flex-sm-row">
        <div className="container">
          <li
            className="flex-sm-fill text-sm-center nav-link active"
            aria-current="page"
            href="#"
          >
            Lead manager
          </li>
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Header);
