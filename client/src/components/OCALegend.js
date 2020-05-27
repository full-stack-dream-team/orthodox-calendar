import React from "react";

class OCALegend extends React.Component {
  render() {
    const {
      ocaFasts: { fasts },
    } = this.props;

    return fasts.map((fast, i) => (
      <div key={i}>
        <h5>
          <i
            className="iconify"
            data-icon={fast.symbol}
            data-inline="false"
          ></i>{" "}
          {fast.desc}
        </h5>
        <p className="mt-0">
          <strong>Allowed: </strong> {fast.allowed}
          <br />
          <strong>Refrain from: </strong> {fast.disallowed}
        </p>
      </div>
    ));
  }
}

export default OCALegend;
