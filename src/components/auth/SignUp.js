import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";
import { connect } from "react-redux";

export class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { authError, auth } = this.props;

    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h5 className="blue-text lighten-3 center">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name=""
              id="firstName"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name=""
              id="lastName"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">email</label>
            <input
              type="email"
              name=""
              id="email"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">password</label>
            <input
              type="password"
              name=""
              id="password"
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="input-field center">
            <button
              className="btn blue btn-flat white-text  z-depth-1 "
              type="submit"
            >
              Sign Up
            </button>
          </div>
          {authError && (
            <div className="center red-text">
              <p>{authError}</p>
            </div>
          )}
          <div className="center indigo-text">
            Already Have An Account, <Link to="/signin">Sign In</Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authError: state.authState.authError,
  auth: state.firebase.auth
});

const mapDisptachToProps = dispatch => ({
  signUp: user => dispatch(signUp(user))
});

export default connect(
  mapStateToProps,
  mapDisptachToProps
)(SignUp);
