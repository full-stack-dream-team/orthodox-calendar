import React, { Component } from "react";
import M from "materialize-css";

class Readings extends Component {
  modals = [];
  modalsInitialized = false;

  componentDidUpdate() {
    if (!this.modalsInitialized && this.modals.length) {
      const options = {};
      this.modals.forEach((Modal, i) => {
        M.Modal.init(Modal, options);
      });

      this.modalsInitialized = true;
    }
  }

  render() {
    const { day } = this.props;

    return (
      <>
        <div className="col s12">
          <div className="card-panel cyan lighten-3">
            <h5>
              <i
                className="iconify"
                data-icon="bx:bxs-bible"
                data-inline="false"
              ></i>{" "}
              SCRIPTURE READINGS (KJV)
            </h5>

            {day.readings
              ? day.readings.map((reading, i) => (
                  <div key={i}>
                    <div
                      style={{ cursor: "pointer" }}
                      data-target={"reading" + i}
                      className="modal-trigger grey-text text-darken-4"
                    >
                      <h5>{reading.display}</h5>
                    </div>

                    <div
                      id={"reading" + i}
                      className="modal"
                      ref={(Modal) => {
                        this.modals.push(Modal);
                      }}
                    >
                      <div className="modal-content">
                        <div className="right-align modal-close">
                          <i
                            className="iconify"
                            data-icon="fa-solid:times"
                            data-inline="false"
                          ></i>
                        </div>

                        <h5 className="center-align">
                          <i
                            className="iconify"
                            data-icon="bx:bxs-bible"
                            data-inline="false"
                          ></i>{" "}
                          {reading.display}
                        </h5>

                        {reading.passage.map((verse, i) => (
                          <p style={{ margin: "0" }} key={i}>
                            <span className="blue-text text-lighten-2">
                              {verse.verse}{" "}
                            </span>
                            {verse.content}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      </>
    );
  }
}

export default Readings;
