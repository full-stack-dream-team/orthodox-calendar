import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import isEmpty from "is-empty";
import { registerUser } from "../redux/actions/authActions";

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    password2: "",
    errors: {},
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, password, password2 } = this.state;

    const newUser = {
      name,
      email,
      password,
      password2,
    };

    this.props.registerUser(newUser, this.props.history);
  };

  componentDidUpdate(prevProps) {
    if (isEmpty(prevProps.errors) && !isEmpty(this.props.errors)) {
      this.setState({ errors: this.props.errors });
    }
  }

  render() {
    const { errors } = this.state;

    return (
      <>
        <Link to="/">← Back to home</Link>
        <div style={{ paddingLeft: "11.250px" }}>
          <h4>Register below</h4>
          <p>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
        <form noValidate onSubmit={this.handleSubmit}>
          <div>
            <input
              onChange={this.handleChange}
              value={this.state.name}
              error={errors.name}
              id="name"
              type="text"
              className={classnames("", {
                invalid: errors.name,
              })}
            />
            <label htmlFor="name">Name</label>
            <span style={{ color: "white", backgroundColor: "red" }}>
              {errors.name}
            </span>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              value={this.state.email}
              error={errors.email}
              id="email"
              type="email"
              className={classnames("", {
                invalid: errors.email,
              })}
            />
            <label htmlFor="email">Email</label>
            <span style={{ color: "white", backgroundColor: "red" }}>
              {errors.email}
            </span>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              value={this.state.password}
              error={errors.password}
              id="password"
              type="password"
              className={classnames("", {
                invalid: errors.password,
              })}
            />
            <label htmlFor="password">Password</label>
            <span style={{ color: "white", backgroundColor: "red" }}>
              {errors.password}
            </span>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              value={this.state.password2}
              error={errors.password2}
              id="password2"
              type="password"
              className={classnames("", {
                invalid: errors.password2,
              })}
            />
            <label htmlFor="password2">Confirm Password</label>
            <span style={{ color: "white", backgroundColor: "red" }}>
              {errors.password2}
            </span>
          </div>
          <div style={{ paddingLeft: "11.250px" }}>
            <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
              }}
              type="submit"
            >
              Sign up
            </button>
          </div>
        </form>
      </>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
