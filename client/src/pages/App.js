import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { logoutUser } from "../redux/actions/authActions";
import { fetchDay } from "../redux/actions/calendarActions";

class App extends React.Component {
  state = {
    day: {},
  };

  unmounted = false;

  getDay = () => {
    const res = this.props.fetchDay().then((res) => {
      if (!this.unmounted) {
        this.setState({ day: res.payload || {} });
      }
    });
  };

  componentDidMount() {
    this.getDay();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  render() {
    const { day } = this.state;

    console.log(day);

    return (
      <div className="App main">
        {/*<button onClick={this.props.logoutUser}>Log Out</button>*/}
        <h2>Feasts Today</h2>
        {day.feasts
          ? day.feasts.map((feast) => <p key={feast}>{feast}</p>)
          : null}
      </div>
    );
  }
}

export default connect(undefined, { fetchDay })(App);
