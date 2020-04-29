import React, { Component } from "react";

class FastingCard extends Component {
  ocaFast = {
    strict: {
      symbol: `<i
        className="iconify"
        data-icon="mdi:bolnisi-cross"
        data-inline="false"
      ></i>`,
      allowed: "Vegetables, fruit and bread are allowed.",
      disallowed: "Refrain from meat, fish, oil, wine, dairy, and eggs.",
    },
    wine: {
      symbol: `<i
        className="iconify"
        data-icon="noto:grapes"
        data-inline="false"
      ></i>`,
      allowed: "All of strict fast, wine and oil are allowed.",
      disallowed: "Refrain from meat, fish, dairy, and eggs.",
    },
    fish: {
      symbol: `<i
        className="iconify"
        data-icon="noto:fish"
        data-inline="false"
      ></i>`,
      allowed: "All of strict fast, wine, oil and fish are allowed.",
      disallowed: "Refrain from meat, dairy, and eggs.",
    },
    dairy: {
      symbol: `<i
        className="iconify"
        data-icon="noto:cheese-wedge"
        data-inline="false"
      ></i>`,
      allowed:
        "All of strict fast, wine, oil, fish, eggs and dairy are allowed.",
      disallowed: "Refrain from meat.",
    },
  };

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

          <p style={{ textTransform: "uppercase" }}>
            <strong>
              {day.fast_level_desc ? day.fast_level_desc : "No Fast"}
            </strong>
          </p>

          <p>
            {day.fast_exception_desc ? day.fast_exception_desc : "Fast Free"}
          </p>
        </div>
      </div>
    );
  }
}

export default FastingCard;
