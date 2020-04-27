import React from "react";
import { connect } from "react-redux";
import "../sass/index.scss";
// import { logoutUser } from "../redux/actions/authActions";
import { getDate } from "../redux/actions/calendarActions";
import DayNav from "../components/DayNav";
import DateCard from "../components/DateCard";
import FastingCard from "../components/FastingCard";
import FeastDayCard from "../components/FeastDayCard";
import Readings from "../components/Readings";
import JurisdictionsSelector from "../components/JurisdictionsSelector";

class App extends React.Component {
  state = {
    day: {},
  };

  unmounted = false;

  componentDidMount() {
    this.props.getDate();
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
      <div className="App">
        <div className="container">
          <h1 className="center-align">Daily Readings</h1>
          <DayNav />
          <JurisdictionsSelector />

          <div className="row">
            <DateCard day={day} />
          </div>

          <div className="row">
            <FastingCard day={day} />
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

const mapStateToProps = (state) => ({
  day: state.calendar.date || {},
});

export default connect(mapStateToProps, { getDate })(App);
