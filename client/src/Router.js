import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import App from "./pages/App";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Oops from "./pages/Oops";
import Error from "./pages/Error";

class Router extends React.Component {
  protComp = (needsAuth, fallback) =>
    this.props.auth.isAuthenticated ? needsAuth : fallback;

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={this.protComp(App, Landing)} />
          <Route
            exact
            path="/register"
            component={this.protComp(Error, Register)}
          />
          <Route exact path="/login" component={this.protComp(Error, Login)} />
          <Route
            exact
            path="/forgotpassword"
            component={this.protComp(Error, ForgotPassword)}
          />
          <Route
            exact
            path="/resetpassword/:token"
            component={this.protComp(Error, ResetPassword)}
          />
          <Route exact path="/oops" component={Oops} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Router);
