import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { resetUserPassword } from "../redux/actions/authActions";

class ResetPassword extends React.Component {
  state = {
    password: "",
    password2: "",
    errors: {},
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { password, password2 } = this.state;

    const data = {
      password,
      password2,
      token: this.props.match.params.token,
    };

    this.props.resetUserPassword(data, this.props.history);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      if (this.props.errors.token === "invalid") {
        this.props.history.push("/oops");
      }
      this.setState({ errors: this.props.errors });
    }
  }

  render() {
    const { errors } = this.state;

    return (
      <>
        <Link to="/">← Back to home</Link>
        <div style={{ paddingLeft: "11.250px" }}>
          <h4>Type new password below</h4>
        </div>
        <form noValidate onSubmit={this.handleSubmit}>
          <div>
            <input
              onChange={this.handleChange}
              value={this.state.password}
              error={errors.password}
              id="password"
              type="password"
              className={classnames("", {
                invalid: errors.password || errors.passwordincorrect,
              })}
            />
            <label htmlFor="password">Password</label>
            <span style={{ color: "white", backgroundColor: "red" }}>
              {errors.password}
              {errors.passwordincorrect}
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
              Reset Password
            </button>
          </div>
        </form>
      </>
    );
  }
}

ResetPassword.propTypes = {
  resetUserPassword: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { resetUserPassword })(ResetPassword);
