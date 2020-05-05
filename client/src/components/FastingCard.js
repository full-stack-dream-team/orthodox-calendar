import React, { Component } from "react";
import OCAFastingDescription from "./OCAFastingDescription";
import ROCORFastingDescription from "./ROCORFastingDescription";
import FastingLegend from "./FastingLegend";

class FastingCard extends Component {
  state = {
    symbol: "",
    switched: false,
  };

  componentDidUpdate() {
    let symbol = "";

    if (this.props.jurisdiction === "oca") {
      switch (this.props.day.fast_exception_desc) {
        case "Wine is Allowed":
          symbol = "noto:grapes";
          break;
        case "Wine and Oil are Allowed":
          symbol = "noto:grapes";
          break;
        case "Fish, Wine and Oil are Allowed":
          symbol = "noto:fish";
          break;
        case "Meat Fast":
          symbol = "noto:cheese-wedge";
          break;
        case "Wine, Oil and Caviar are Allowed":
          symbol = "emojione:letter-c";
          break;
        case "Strict Fast":
          symbol = "mdi:bolnisi-cross";
          break;
        default:
          symbol = "";
      }
    }
    if (symbol !== this.state.symbol) {
      this.setState({ symbol, switched: !this.state.switched });
    }
  }

  render() {
    const { day, jurisdiction, russianFast } = this.props;
    const { symbol, switched } = this.state;

    return (
      <div className="col s12 m6">
        <div className="card-panel cyan lighten-4">
          <span></span>
          <FastingLegend day={day} jurisdiction={jurisdiction} />
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
              {symbol && !switched ? (
                <span style={{ marginRight: "0.5em" }}>
                  <i
                    className="iconify"
                    data-icon={symbol}
                    data-inline="false"
                  ></i>
                </span>
              ) : null}
              {symbol && switched ? (
                <span style={{ marginRight: "0.5em" }}>
                  <i
                    className="iconify"
                    data-icon={symbol}
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
          {jurisdiction === "oca" ? (
            <OCAFastingDescription day={day} />
          ) : (
            <ROCORFastingDescription russianFast={russianFast} />
          )}
        </div>
      </div>
    );
  }
}

export default FastingCard;
