import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "../sass/index.scss";
// import { logoutUser } from "../redux/actions/authActions";
import {
  getDate,
  setDateQuery,
  setJurisdiction,
} from "../redux/actions/calendarActions";

import DayNav from "../components/DayNav";
import DateCard from "../components/DateCard";
import FastingCard from "../components/FastingCard";
import FeastDayCard from "../components/FeastDayCard";
import Readings from "../components/Readings";
import JurisdictionsSelector from "../components/JurisdictionsSelector";

class App extends React.Component {
  state = {
    day: {},
    currentUrlParams: {},
  };

  unmounted = false;

  setUrlParamsState = () => {
    const urlParams = new URLSearchParams(window.location.search);

    const queries = {};
    for (let [key, value] of urlParams) {
      queries[key] = parseInt(value);
    }

    this.setState({ currentUrlParams: queries });
  };

  setDateToQuery = () => {
    const urlParams = new URLSearchParams(window.location.search);

    const queries = {};
    for (let [key, value] of urlParams) {
      queries[key] = value;
    }

    const { year, month, day } = queries;

    this.props.setDateQuery(
      (year || year === 0) && (month || month === 0) && (day || day === 0)
        ? { year, month, day }
        : null
    );
    this.props.getDate();
  };

  componentDidMount() {
    this.setDateToQuery();
    this.setUrlParamsState();

    this.props.history.listen(() => {
      this.setDateToQuery();
      this.setUrlParamsState();
    });
  }

  componentWillUnmount() {
    this.unmounted = true;
  }
  render() {
    const { day, jurisdiction } = this.props;

    // console.log(day);

    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col s12" style={{ marginTop: "2rem" }}>
              <Link to="/calendar">← Back To Calendar</Link>
            </div>
          </div>
          <h2 className="center-align" style={{ marginTop: "0" }}>
            Daily Readings
          </h2>
          <DayNav {...this.state.currentUrlParams} />

          <JurisdictionsSelector
            setJurisdiction={(nextJurisdiction) => {
              this.props.setJurisdiction(nextJurisdiction);
              this.props.getDate();
            }}
          />

          <div className="row">
            <DateCard day={day} jurisdiction={jurisdiction} />
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

const mapStateToProps = ({ calendar }) => ({
  day: calendar.date || {},
  jurisdiction: calendar.jurisdiction,
});

export default connect(mapStateToProps, {
  getDate,
  setDateQuery,
  setJurisdiction,
})(App);
