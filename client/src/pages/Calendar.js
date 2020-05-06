import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import {
  getDate,
  setDateQuery,
  setJurisdiction,
} from "../redux/actions/calendarActions";

class Calendar extends React.Component {
  state = {
    colorScheme: "white",
  };

  unmounted = false;

  today = new Date();

  formatMonth = (date) => {
    const month = [...date];
    for (let i = 0; i < Math.abs(date[0].weekday + 7) - 7; i++) {
      month.unshift({ empty: true });
    }
    for (let i = 0; i < 7 - date[date.length - 1].weekday; i++) {
      month.push({ empty: true });
    }

    const weeks = [];
    let week = [];
    month.forEach((day, i) => {
      if (week.length === 7) {
        weeks.push(week);
        week = [];
      }
      week.push(day);
    });

    return weeks;
  };

  changeMonth = (change) => {
    const { dateQuery } = { ...this.props };

    dateQuery.month += change;

    if (dateQuery.month < 1) {
      dateQuery.year -= 1;
      dateQuery.month = 12;
    } else if (dateQuery.month > 12) {
      dateQuery.year += 1;
      dateQuery.month = 1;
    }

    this.setDate(dateQuery);
  };

  setDate = (dateQuery) => {
    this.props.setDateQuery(
      dateQuery || {
        year: this.today.getFullYear(),
        month: this.today.getMonth() + 1,
      }
    );
    this.props.getDate();
  };

  componentDidMount() {
    this.setDate();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  render() {
    const date = this.props.date.length
      ? this.formatMonth(this.props.date)
      : [];

    return (
      <div className="Calendar">
        <div className="container">
          <div className="row">
            <div className="col s12 mt-2 right-align">
              <h6>Color Scheme</h6>
              <button
                className="white lighten-5"
                onClick={() => this.setState({ colorScheme: "white" })}
              >
                Warm
              </button>
              <button
                className="blue lighten-5"
                onClick={() => this.setState({ colorScheme: "blue" })}
              >
                Cool
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col s12 mt-2 right-align">
              <h6>Jurisdiction</h6>
              <button
                className="white lighten-5"
                onClick={() => {
                  this.props.setJurisdiction("oca");
                  this.props.getDate();
                }}
              >
                OCA
              </button>
              <button
                className="blue lighten-5"
                onClick={() => {
                  this.props.setJurisdiction("rocor");
                  this.props.getDate();
                }}
              >
                ROCOR
              </button>
            </div>
          </div>

          <h2 className="center-align mt-0">
            <i
              className="iconify"
              data-icon="emojione-monotone:orthodox-cross"
              data-inline="false"
            ></i>{" "}
            Gregorian Calendar
          </h2>

          <div id="month-nav">
            <div className="row">
              <div className="col s12 center-align">
                <button
                  className="waves-effect waves-cyan btn grey darken-4"
                  onClick={() => this.changeMonth(-1)}
                >
                  Previous Month
                </button>
                <button
                  className="today btn waves-effect waves-cyan grey lighten-5 black-text mx-1"
                  onClick={() => this.setDate()}
                >
                  Today
                </button>
                <button
                  className="waves-effect waves-cyan btn grey darken-4"
                  onClick={() => this.changeMonth(1)}
                >
                  Next Month
                </button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col s12 center-align">
              {this.props.date.length ? (
                <h5>
                  <Moment
                    date={{
                      ...this.props.date[0],
                      month: this.props.date[0].month - 1,
                    }}
                    format="MMMM, YYYY"
                  />
                </h5>
              ) : null}
            </div>
          </div>
          <div className="row">
            <div id="calendar" className="col s12">
              <div className="row mb-0">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div
                      key={day}
                      className="col s1 m1 w-12 border cyan lighten-5"
                    >
                      <h6>{day}</h6>
                    </div>
                  )
                )}
              </div>
              {date.map((week, i) => (
                <div key={i} className="row mb-0">
                  {week.map((day, j) =>
                    day.empty ? (
                      <div
                        key={j}
                        className="col s1 m1 w-12 mh-100 border grey lighten-2"
                      ></div>
                    ) : (
                      <Link
                        key={j}
                        to={`/?year=${day.year}&month=${day.month}&day=${day.day}`}
                      >
                        <div
                          key={j}
                          className={`col s1 m1 w-12 mh-100 border ${
                            this.state.colorScheme
                          } ${
                            day.day === this.today.getDate() &&
                            day.month === this.today.getMonth() + 1 &&
                            day.year === this.today.getFullYear()
                              ? ""
                              : "lighten-4"
                          }`}
                        >
                          <p className="black-text">
                            <b>{day.day}</b>
                          </p>
                        </div>
                      </Link>
                    )
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ calendar: state }) => ({
  date: state.date || [],
  dateQuery: state.dateQuery || {},
  jurisdiction: state.jurisdiction,
});

export default connect(mapStateToProps, {
  getDate,
  setDateQuery,
  setJurisdiction,
})(Calendar);
