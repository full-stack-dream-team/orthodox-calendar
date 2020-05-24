import React, { Component } from "react";
import Moment from "react-moment";

class DateCard extends Component {
  render() {
    const { titles, currentUrlParams: day } = this.props;

    return (
      <div className="col s12 m6">
        <div className="card-panel cyan lighten-5">
          <div className="row">
            <div className="col s12 center-align">
              <h5>{titles}</h5>
            </div>
          </div>
          <div className="row">
            <div className="col m12 center-align">
              <h6>
                Gregorian:{" "}
                <strong>
                  <Moment
                    date={{
                      day: day.day,
                      month: day.month - 1,
                      year: day.year,
                    }}
                    format={"dddd, MMMM Do, YYYY"}
                  />
                </strong>
              </h6>
              <h6>
                Julian:{" "}
                <strong>
                  <Moment
                    date={{
                      day: day.day,
                      month: day.month - 1,
                      year: day.year,
                    }}
                    format={"dddd, MMMM Do, YYYY"}
                    subtract={{ days: 13 }}
                  />
                </strong>
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DateCard;
