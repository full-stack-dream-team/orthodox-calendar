import React, { Component } from "react";
import FastingDescription from "./FastingDescription";
import FastingLegend from "./FastingLegend";

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
        <div className="card-panel cyan lighten-4">
          <span></span>
          <FastingLegend />
          <h5 style={{ marginTop: "0" }}>FASTING</h5>
          <p>
            <strong>
              {day.fast_level_desc && jurisdiction === "oca"
                ? day.fast_level_desc
                : null}
            </strong>
          </p>
          <h5>
            <strong>
              {icon ? (
                <span style={{ marginRight: "0.5em" }}>
                  <i
                    className="iconify"
                    data-icon={icon}
                    data-inline="false"
                  ></i>
                </span>
              ) : null}
              {day.fast_exception_desc && jurisdiction === "oca"
                ? day.fast_exception_desc
                : russianFast &&
                  russianFast.replace(" ", "") &&
                  jurisdiction === "rocor"
                ? russianFast
                : "Fast free"}
            </strong>
          </h5>
          <FastingDescription day={day} />
        </div>
      </div>
    );
  }
}

export default FastingCard;
