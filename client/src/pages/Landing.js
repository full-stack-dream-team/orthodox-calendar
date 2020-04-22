import React from "react";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  render() {
    return (
      <>
        <h3>
          It looks like you're not signed up! Either register a new account, or
          login to an existing one
        </h3>
        <Link to="/register">Register</Link>
        <Link to="/login">Log In</Link>
      </>
    );
  }
}

export default Landing;
