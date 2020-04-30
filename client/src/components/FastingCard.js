import React, { Component } from "react";

class FastingCard extends Component {
  render() {
    const { day, jurisdiction, russianFast } = this.props;

    return (
      <div className="col s12 m6">
        <div className="card-panel">
          <h5>
            <i
              className="iconify"
              data-icon="mdi:bolnisi-cross"
              data-inline="false"
            ></i>{" "}
            FASTING
          </h5>
          <p>
            <strong>
              {day.fast_exception_desc && jurisdiction === "oca"
                ? day.fast_exception_desc
                : russianFast &&
                  russianFast.replace(" ", "") &&
                  jurisdiction === "rocor"
                ? russianFast
                : "Fast free"}
            </strong>
          </p>
        </div>
      </div>
    );
  }
}

export default FastingCard;
