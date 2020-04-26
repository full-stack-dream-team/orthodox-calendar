import React, { Component } from "react";

class FastCard extends Component {
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
            FAST
          </h5>
          <p>
            <strong>
              {day.fast_exception_desc ? day.fast_exception_desc : "Fast Free"}
            </strong>
          </p>
        </div>
      </div>
    );
  }
}

export default FastCard;
