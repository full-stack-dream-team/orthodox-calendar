import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { sendForgotEmail } from "../redux/actions/authActions";

class ForgotPassword extends React.Component {
  state = {
    email: "",
    errors: {},
  };

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
    };

    this.props.sendForgotEmail(userData, this.props.history);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.errors !== this.props.errors) {
      this.setState({ errors: this.props.errors });
    }
  }

  render() {
    const { errors } = this.state;

    return (
      <>
        <Link to="/">← Back to home</Link>
        <div style={{ paddingLeft: "11.250px" }}>
          <h4>Forgot Password</h4>
        </div>
        <form noValidate onSubmit={this.onSubmit}>
          <div>
            <input
              onChange={this.onChange}
              value={this.state.email}
              error={errors.email}
              id="email"
              type="email"
              className={classnames("", {
                invalid: errors.email || errors.emailnotfound,
              })}
            />
            <label htmlFor="email">Email</label>
            <span style={{ color: "white", backgroundColor: "red" }}>
              {errors.email}
              {errors.emailnotfound}
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
              Send Email
            </button>
          </div>
        </form>
      </>
    );
  }
}

ForgotPassword.propTypes = {
  sendForgotEmail: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { sendForgotEmail })(ForgotPassword);
