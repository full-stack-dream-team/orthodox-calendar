import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import App from "./pages/App";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Error from "./pages/Error";

class Router extends React.Component {
  protectedComponent = (needsAuth, fallback) =>
    this.props.auth.isAuthenticated ? needsAuth : fallback;

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={this.protectedComponent(App, Landing)}
          />
          <Route
            exact
            path="/register"
            component={this.protectedComponent(Error, Register)}
          />
          <Route
            exact
            path="/login"
            component={this.protectedComponent(Error, Login)}
          />
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
