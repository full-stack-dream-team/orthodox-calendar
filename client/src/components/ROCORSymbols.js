import React, { Component } from "react";

class ROCORSymbols extends Component {
  render() {
    const { russianFast } = this.props;
    let symbol;

    if (russianFast.includes("Full abstention from food")) {
      symbol = "emojione-v1:cross-mark";
    } else if (russianFast.includes("Strict Fast")) {
      symbol = "mdi:bolnisi-cross";
    } else if (russianFast.includes("Food without Oil")) {
      symbol = "emojione:pot-of-food";
    } else if (russianFast.includes("Food with Oil")) {
      symbol = "noto:grapes";
    } else if (russianFast.includes("Caviar Allowed")) {
      symbol = "emojione:letter-c";
    } else if (russianFast.includes("Fish Allowed")) {
      symbol = "noto:fish";
    } else if (russianFast.includes("Meat is excluded")) {
      symbol = "noto:cheese-wedge";
    } else {
      symbol = "";
    }

    return <span>{symbol}</span>;
  }
}

export default ROCORSymbols;
