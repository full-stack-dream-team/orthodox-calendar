import React, { Component } from "react";

class FastingDescription extends Component {
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
      allowed: "All of the strict fast items, wine and oil are allowed.",
      disallowed: "Refrain from meat, fish, dairy, and eggs.",
    },
    fish: {
      symbol: `<i
        className="iconify"
        data-icon="noto:fish"
        data-inline="false"
      ></i>`,
      allowed:
        "All of the strict fast items, wine, oil and caviar are allowed.",
      disallowed: "Refrain from meat, dairy, and eggs.",
    },
    caviar: {
      symbol: `<i
        className="iconify"
        data-icon="emojione:letter-c"
        data-inline="false"
      ></i>`,
      allowed: "All of the strict fast items, wine, oil and fish are allowed.",
      disallowed: "Refrain from meat, dairy, and eggs.",
    },
    dairy: {
      symbol: `<i
        className="iconify"
        data-icon="noto:cheese-wedge"
        data-inline="false"
      ></i>`,
      allowed:
        "All of the strict fast items, wine, oil, fish, eggs and dairy are allowed.",
      disallowed: "Refrain from meat.",
    },
  };

  render() {
    const { day } = this.props;

    return (
      <>
        <div className="row">
          <div className="col s12">Fasting Info goes here.</div>
        </div>
      </>
    );
  }
}

export default FastingDescription;
