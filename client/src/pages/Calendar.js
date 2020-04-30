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
    colorScheme: "red",
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
    this.props.setJurisdiction("oca");
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
      <div className="container">
        <h6>Color Scheme</h6>
        <button
          className="red lighten-5"
          onClick={() => this.setState({ colorScheme: "red" })}
        >
          Warm
        </button>
        <button
          className="blue lighten-5"
          onClick={() => this.setState({ colorScheme: "blue" })}
        >
          Cool
        </button>

        <h1>Calendar</h1>

        <div>
          <button onClick={() => this.changeMonth(-1)}>←</button>
          <button onClick={() => this.setDate()}>Today</button>
          <button onClick={() => this.changeMonth(1)}>→</button>
        </div>

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
        <div className="row">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="col s1 m1">
              <h6>{day}</h6>
            </div>
          ))}
        </div>
        {date.map((week, i) => (
          <div key={i} className="row">
            {week.map((day, j) =>
              day.empty ? (
                <div key={j} className="col s1 m1"></div>
              ) : (
                <div
                  key={j}
                  className={`col s1 m1 ${this.state.colorScheme} ${
                    day.day === this.today.getDate() &&
                    day.month === this.today.getMonth() + 1 &&
                    day.year === this.today.getFullYear()
                      ? "lighten-3"
                      : "lighten-4"
                  }`}
                >
                  <h5>
                    <Link
                      to={`/?year=${day.year}&month=${day.month}&day=${day.day}`}
                    >
                      {day.day}
                    </Link>
                  </h5>
                </div>
              )
            )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ calendar: state }) => ({
  date: state.date || [],
  dateQuery: state.dateQuery || {},
});

export default connect(mapStateToProps, {
  getDate,
  setDateQuery,
  setJurisdiction,
})(Calendar);
