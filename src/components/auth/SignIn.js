import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { signIn } from "../../store/actions/authActions";
import { connect } from "react-redux";

export class SignIn extends Component {
  state = {
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
    this.props.signIn(this.state);
  };

  render() {
    const { authError, auth } = this.props;
    // console.log(auth);

    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h5 className="blue-text lighten-3 center">Sign In</h5>
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
              Sign In
            </button>
          </div>
          {authError && (
            <div className="center red-text">
              <p>{authError}</p>
            </div>
          )}
          <div className="center indigo-text">
            Dont Have An Account, <Link to="/signup">Sign Up</Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.authState.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => ({
  signIn: creds => dispatch(signIn(creds))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
