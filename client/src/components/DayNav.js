import React, { Component } from "react";
import { Link } from "react-router-dom";

class DayNav extends Component {
  today = new Date();

  resetEverything = () => {
    this.props.resetSaints();
    this.props.resetFasts();
  };

  render() {
    const { year: pYear, month: pMonth, day: pDay } = this.props;
    const { year, month, day } = {
      year: pYear || pYear === 0 ? pYear : this.today.getFullYear(),
      month: pMonth || pMonth === 0 ? pMonth : this.today.getMonth() + 1,
      day: pDay || pDay === 0 ? pDay : this.today.getDate(),
    };

    const nextDate = new Date();
    nextDate.setFullYear(year);
    nextDate.setMonth(month - 1);
    nextDate.setDate(day + 1);

    const prevDate = new Date();
    prevDate.setFullYear(year);
    prevDate.setMonth(month - 1);
    prevDate.setDate(day - 1);

    return (
      <div id="day-nav">
        <div className="row">
          <div className="col s12 center-align">
            <Link
              to={`/?year=${prevDate.getFullYear()}&month=${
                prevDate.getMonth() + 1
              }&day=${prevDate.getDate()}`}
              className="waves-effect waves-cyan btn grey darken-4"
              onClick={this.resetEverything}
            >
              <i
                className="iconify"
                data-icon="fa-solid:chevron-left"
                data-inline="false"
              ></i>{" "}
              Previous
            </Link>
            <Link
              to={`/?year=${this.today.getFullYear()}&month=${
                this.today.getMonth() + 1
              }&day=${this.today.getDate()}`}
              className="today btn waves-effect waves-cyan grey lighten-5 black-text mx-1"
              onClick={this.resetEverything}
            >
              TODAY
            </Link>{" "}
            <Link
              to={`/?year=${nextDate.getFullYear()}&month=${
                nextDate.getMonth() + 1
              }&day=${nextDate.getDate()}`}
              className="waves-effect waves-cyan btn grey darken-4"
              onClick={this.resetEverything}
            >
              Next{" "}
              <i
                className="iconify"
                data-icon="fa-solid:chevron-right"
                data-inline="false"
              ></i>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default DayNav;
