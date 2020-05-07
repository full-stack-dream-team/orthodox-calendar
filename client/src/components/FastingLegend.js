import React, { Component } from "react";
import M from "materialize-css";
import OCALegend from "./OCALegend";
import ROCLegend from "./ROCLegend";

class FastingLegend extends Component {
  componentDidUpdate() {
    M.Modal.init(this.Modal);
  }

  render() {
    const { jurisdiction } = this.props;

    const renderLegend = (jurisdiction) => {
      if (jurisdiction === "oca") {
        return <OCALegend />;
      } else {
        return <ROCLegend />;
      }
    };

    return (
      <>
        <div className="right-align">
          <h5
            style={{ marginTop: "0", marginBottom: "0", cursor: "pointer" }}
            className="modal-trigger"
            data-target="fasting-legend"
          >
            <i
              className="iconify"
              data-icon="el:info-circle"
              data-inline="false"
            ></i>{" "}
          </h5>
        </div>

        <div
          id="fasting-legend"
          className="modal"
          ref={(Modal) => {
            this.Modal = Modal;
          }}
        >
          <div className="modal-content">
            <h5 className="center-align">
              {jurisdiction.toUpperCase()} Fasting Legend
            </h5>
            <div className="row">
              <div className="col s12">{renderLegend(jurisdiction)}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FastingLegend;
