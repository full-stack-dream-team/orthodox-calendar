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
    const { day, jurisdiction, russianFast } = this.props;

    let icon;
    switch (day.fast_exception_desc) {
      case "Wine and Oil are Allowed":
        icon = "noto:grapes";
        break;
      case "Fish, Wine and Oil are Allowed":
        icon = "noto:fish";
        break;
      case "Meat Fast":
        icon = "noto:cheese-wedge";
        break;
      case "Wine, Oil and Caviar are Allowed":
        icon = "emojione:letter-c";
        break;
      case "Strict Fast":
        icon = "mdi:bolnisi-cross";
        break;
      default:
        icon = "";
    }

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

          {icon ? (
            <span>
              <i className="iconify" data-icon={icon} data-inline="false"></i>
            </span>
          ) : null}

          <p>
            <strong>
              {day.fast_level_desc && jurisdiction === "oca"
                ? day.fast_level_desc
                : null}
            </strong>
          </p>
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
