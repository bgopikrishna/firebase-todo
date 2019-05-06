import React from "react";
import SignInLinks from "./SignInLinks";
import SignOutLinks from "./SignOutLinks";
import { connect } from "react-redux";

const Navbar = ({ auth }) => {
  const links = auth.uid ? <SignInLinks /> : <SignOutLinks />;
  return (
    <nav>
      <div className="nav-wrapper light-blue">
        <a href="/" className="brand-logo left">
          GetItDone
        </a>
        <ul id="nav-mobile" className="right ">
          {links}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps)(Navbar);
