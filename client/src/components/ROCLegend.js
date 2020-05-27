import React from "react";

class ROCLegend extends React.Component {
  render() {
    const {
      rocFasts: { fasts },
    } = this.props;

    return fasts.map((fast, i) => (
      <div key={i}>
        <h5 className="mt-1 mb-0">
          <i
            className="iconify"
            data-icon={fast.symbol}
            data-inline="false"
          ></i>{" "}
          {fast.desc}
        </h5>
        <div>
          {fast.allowed && (
            <p className="my-0">
              <strong>Allowed: </strong> {fast.allowed}
            </p>
          )}
          <p className="my-0">
            <strong>Refrain from: </strong> {fast.disallowed}
          </p>
        </div>
      </div>
    ));
  }
}

export default ROCLegend;
