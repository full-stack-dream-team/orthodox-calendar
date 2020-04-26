import React from "react";
import { connect } from "react-redux";
// import { logoutUser } from "../redux/actions/authActions";
import { fetchDay } from "../redux/actions/calendarActions";
import DateCard from "../components/DateCard";
import FastCard from "../components/FastCard";
import FeastDayCard from "../components/FeastDayCard";
import Readings from "../components/Readings";

class App extends React.Component {
  state = {
    day: {}
  };

  unmounted = false;

  getDay = () => {
    this.props.fetchDay();
    // .then((res) => {
    //   if (!this.unmounted) {
    //     this.setState({ day: res || {} });
    //   }
    // });
  };

  componentDidMount() {
    this.props.fetchDay();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.day !== this.props.day) {
      this.setState({ day: this.props.day });
    }
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  render() {
    const { day } = this.state;

    console.log(day);

    return (
      <div className="App main">
        <div className="container">
          <div className="row">
            <DateCard day={day} />
            <FastCard day={day} />
          </div>

          <div className="row">
            <FeastDayCard day={day} />
          </div>

          <div className="row">
            <Readings day={day} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  day: state.calendar.day
});

export default connect(
  mapStateToProps,
  { fetchDay }
)(App);
