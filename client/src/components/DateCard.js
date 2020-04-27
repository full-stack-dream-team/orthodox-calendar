import React, { Component } from "react";
import Moment from "react-moment";

class DateCard extends Component {
  render() {
    const { day } = this.props;
    console.log(day);

    return (
      <div className="col s12">
        <div className="card-panel">
          {/*<button onClick={this.props.logoutUser}>Log Out</button>*/}

          <div className="row">
            <div className="col s12 center-align">
              <h5>
                <i
                  className="iconify"
                  data-icon="emojione-monotone:orthodox-cross"
                  data-inline="false"
                ></i>{" "}
                {day.titles}
              </h5>
            </div>
          </div>
          <div className="row">
            <div className="col m12">
              Calendar Date:{" "}
              <strong>
                <Moment
                  date={day}
                  format={"dddd, MMMM Do, YYYY"}
                  subtract={{ months: 1 }}
                />
              </strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DateCard;
