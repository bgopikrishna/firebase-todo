import React from "react";
import { signOut } from "../../store/actions/authActions";
import { connect } from "react-redux";

const SignInLinks = ({ signOut, profile }) => {
  const { initials } = profile;
  return (
    <React.Fragment>
      <li>
        <button className="btn btn-flat white-text" onClick={signOut}>
          Log Out
        </button>
      </li>
      <li>
        <a
          aria-current="page"
          className="btn btn-floating blue lighten-3 active"
          href="/"
        >
          {initials}
        </a>
      </li>
    </React.Fragment>
  );
};
const mapStateToProps = state => {
  return {
    profile: state.firebase.profile
  };
};

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInLinks);
