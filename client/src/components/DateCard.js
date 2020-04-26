import React, { Component } from "react";
import Moment from "react-moment";

class DateCard extends Component {
  render() {
    const { day } = this.props;
    console.log(day);

    return (
      <div className="col s12 m6">
        <div className="card-panel">
          {/*<button onClick={this.props.logoutUser}>Log Out</button>*/}
          <h5>
            <i
              className="iconify"
              data-icon="el:calendar-sign"
              data-inline="false"
            ></i>{" "}
            DATE
          </h5>
          <p>
            Julian (Old Calendar):{" "}
            <strong>
              <Moment
                date={day}
                format={"dddd, MMMM Do, YYYY"}
                subtract={{ months: 1, days: 13 }}
              />
            </strong>
          </p>
          <p>
            Gregorian (New Calendar):{" "}
            <strong>
              <Moment
                date={day}
                format={"dddd, MMMM Do, YYYY"}
                subtract={{ months: 1 }}
              />
            </strong>
          </p>
        </div>
      </div>
    );
  }
}

export default DateCard;
