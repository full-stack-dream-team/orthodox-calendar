import React, { Component } from "react";
import OCAFastingDescription from "./OCAFastingDescription";
import ROCFastingDescription from "./ROCFastingDescription";
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
    } else if (
      this.props.jurisdiction === "rocor" &&
      this.props.russianFast.symbol
    ) {
      symbol = this.props.russianFast.symbol;
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
          <h5>
            <strong>
              {day.fast_level_desc && jurisdiction === "oca"
                ? day.fast_level_desc === "No Fast"
                  ? ""
                  : day.fast_level_desc
                : null}
            </strong>
          </h5>
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
                : russianFast.fastDesc &&
                  russianFast.fastDesc.replace(" ", "") &&
                  jurisdiction === "rocor"
                ? russianFast.fastDesc.split(". ").map((fastDesc, i) =>
                    fastDesc.trim() ? (
                      i === russianFast.fastDesc.split(". ").length - 2 ? (
                        <span key={fastDesc}>
                          {fastDesc.trim()}
                          <br />
                        </span>
                      ) : (
                        <span key={fastDesc}>{fastDesc.trim()}. </span>
                      )
                    ) : (
                      "Fast free"
                    )
                  )
                : "Fast free"}
            </strong>
          </h5>
          {jurisdiction === "oca" ? (
            <OCAFastingDescription day={day} />
          ) : (
            <ROCFastingDescription russianFast={russianFast} />
          )}
        </div>
      </div>
    );
  }
}

export default FastingCard;
