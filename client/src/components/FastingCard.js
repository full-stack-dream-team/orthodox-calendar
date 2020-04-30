import React, { Component } from "react";
import FastingDescription from "./FastingDescription";

class FastingCard extends Component {
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
          <FastingDescription />
        </div>
      </div>
    );
  }
}

export default FastingCard;
