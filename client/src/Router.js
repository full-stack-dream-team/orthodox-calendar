import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./pages/App";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Error from "./pages/Error";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
