import React, { Component } from "react";

class ROCSymbols extends Component {
  render() {
    const { rocFast } = this.props;
    let symbol;

    if (rocFast.includes("Full abstention from food")) {
      symbol = "emojione-v1:cross-mark";
    } else if (rocFast.includes("Strict Fast")) {
      symbol = "mdi:bolnisi-cross";
    } else if (rocFast.includes("Food without Oil")) {
      symbol = "emojione:pot-of-food";
    } else if (rocFast.includes("Food with Oil")) {
      symbol = "noto:grapes";
    } else if (rocFast.includes("Caviar Allowed")) {
      symbol = "emojione:letter-c";
    } else if (rocFast.includes("Fish Allowed")) {
      symbol = "noto:fish";
    } else if (rocFast.includes("Meat is excluded")) {
      symbol = "noto:cheese-wedge";
    } else {
      symbol = "";
    }

    return <span>{symbol}</span>;
  }
}

export default ROCSymbols;
