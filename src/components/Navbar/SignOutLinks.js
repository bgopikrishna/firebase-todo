import React from "react";
import { Link } from "react-router-dom";

const SignOutLinks = () => {
  return (
    <React.Fragment>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
      <li>
        <Link to="/signin">Sign In</Link>
      </li>
    </React.Fragment>
  );
};

export default SignOutLinks;
