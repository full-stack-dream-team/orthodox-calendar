import React, { Component } from "react";
import { Link } from "react-router-dom";

const now = new Date();

class DayNav extends Component {
  render() {
    const { year: pYear, month: pMonth, day: pDay } = this.props;
    const { year, month, day } = {
      year: pYear || pYear === 0 ? pYear : now.getFullYear(),
      month: pMonth || pMonth === 0 ? pMonth : now.getMonth() + 1,
      day: pDay || pDay === 0 ? pDay : now.getDate(),
    };

    return (
      <div id="day-nav">
        <div className="row">
          <div className="col s12 center-align">
            <Link
              to={`/?year=${year}&month=${month}&day=${day - 1}`}
              className="waves-effect waves-light btn"
            >
              Previous Day
            </Link>
            <Link
              to="/"
              className="today btn waves-effect waves-teal teal lighten-5 black-text"
            >
              TODAY
            </Link>{" "}
            <Link
              to={`/?year=${year}&month=${month}&day=${day + 1}`}
              className="waves-effect waves-light btn"
            >
              Next Day
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default DayNav;
