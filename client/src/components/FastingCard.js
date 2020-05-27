import React, { Component } from "react";
import OCAFastingDescription from "./OCAFastingDescription";
import ROCFastingDescription from "./ROCFastingDescription";
import FastingLegend from "./FastingLegend";
import CardLoading from "./CardLoading";

class FastingCard extends Component {
  state = {
    symbol: "",
    switched: false,
  };

  componentDidUpdate() {
    let symbol = "";

    if (this.props.jurisdiction === "oca" && this.props.day.symbol) {
      symbol = this.props.day.symbol;
    } else if (
      this.props.jurisdiction === "rocor" &&
      this.props.rocInfo.fast.symbol
    ) {
      symbol = this.props.rocInfo.fast.symbol;
    }

    if (symbol !== this.state.symbol) {
      this.setState({ symbol, switched: !this.state.switched });
    }
  }

  render() {
    const {
      day,
      jurisdiction,
      rocInfo: {
        fast: { fastDesc },
      },
      rocInfo,
      ocaFasts,
    } = this.props;
    const { symbol, switched } = this.state;

    return (
      <div className="col s12 m6">
        <div className="card-panel cyan lighten-4">
          <div className="row">
            <div className="col s9">
              <h5>
                {day.fast_level_desc && jurisdiction === "oca"
                  ? day.fast_level_desc === "No Fast"
                    ? ""
                    : day.fast_level_desc
                  : null}
              </h5>
            </div>
            <div className="col s1 offset-s1">
              <FastingLegend
                day={day}
                jurisdiction={jurisdiction}
                ocaFasts={ocaFasts}
              />
            </div>
          </div>
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
                <span className="mr-1">
                  <i
                    className="iconify"
                    data-icon={symbol}
                    data-inline="false"
                  ></i>
                </span>
              ) : null}
              {symbol && switched ? (
                <span className="mr-1">
                  <i
                    className="iconify"
                    data-icon={symbol}
                    data-inline="false"
                  ></i>
                </span>
              ) : null}
              {day.fast_exception_desc && jurisdiction === "oca" ? (
                day.fast_exception_desc
              ) : fastDesc &&
                fastDesc.replace(" ", "") &&
                jurisdiction === "rocor" ? (
                fastDesc.split(". ").map((fastDesc, i) =>
                  fastDesc.trim() ? (
                    i === fastDesc.split(". ").length - 2 ? (
                      <span key={i}>
                        {fastDesc.trim()}
                        <br />
                      </span>
                    ) : (
                      <span key={i}>{fastDesc.trim()} </span>
                    )
                  ) : (
                    <CardLoading />
                  )
                )
              ) : (
                <CardLoading />
              )}
            </strong>
          </h5>
          {jurisdiction === "oca" ? (
            <OCAFastingDescription day={day} />
          ) : (
            <ROCFastingDescription rocInfo={rocInfo} />
          )}
        </div>
      </div>
    );
  }
}

export default FastingCard;
