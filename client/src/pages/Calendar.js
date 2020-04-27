import React from "react";
import { connect } from "react-redux";
import Moment from "react-moment";
import { getDate } from "../redux/actions/calendarActions";

const now = new Date();

class Calendar extends React.Component {
  state = {
    colorScheme: "red",
  };

  formatMonth = (date) => {
    const month = [...date];
    for (let i = 0; i < Math.abs(date[0].weekday - 7); i++) {
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

  componentDidMount() {
    this.props.getDate(`${now.getFullYear()}/${now.getMonth() + 1}/`);
  }

  render() {
    const date = this.props.date.length
      ? this.formatMonth(this.props.date)
      : [];

    console.log(date);

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
        {this.props.date.length ? (
          <h5>
            <Moment date={this.props.date[0]} format="MMMM, YYYY" />
          </h5>
        ) : null}
        {date.map((week, i) => (
          <div key={i} className="row">
            {week.map((day, j) =>
              day.empty ? (
                <div key={j} className="col s1 m1"></div>
              ) : (
                <div
                  key={j}
                  className={`col s1 m1 ${this.state.colorScheme} ${
                    day.day === now.getDate() ? "lighten-3" : "lighten-4"
                  }`}
                >
                  <h5>{day.day}</h5>
                </div>
              )
            )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  date: state.calendar.date || [],
});

export default connect(mapStateToProps, { getDate })(Calendar);
