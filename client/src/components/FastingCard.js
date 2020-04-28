import React, { Component } from "react";

class FastingCard extends Component {
  render() {
    const { day } = this.props;

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
              {day.fast_exception_desc ? day.fast_exception_desc : ""}
            </strong>
          </p>
        </div>
      </div>
    );
  }
}

export default FastingCard;
