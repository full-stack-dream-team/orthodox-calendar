import React from "react";
import { connect } from "react-redux";
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
  };

  unmounted = false;

  setDateToQuery = () => {
    const urlParams = new URLSearchParams(window.location.search);

    const queries = [];
    for (let value of urlParams.values()) {
      queries.push(value);
    }

    this.props.setDateQuery(
      queries.length === 3
        ? {
            year: queries[0],
            month: queries[1],
            day: queries[2],
          }
        : null
    );
    this.props.getDate();
  };

  componentDidMount() {
    this.setDateToQuery();
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
          <h1 className="center-align">Daily Readings</h1>
          <DayNav />

          <JurisdictionsSelector
            setJurisdiction={(jurisdiction) => {
              this.props.setJurisdiction(jurisdiction);
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
