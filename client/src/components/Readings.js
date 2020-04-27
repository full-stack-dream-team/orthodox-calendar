import React, { Component } from "react";
import M from "materialize-css";

class Readings extends Component {
  componentDidMount() {
    const options = {};
    M.Collapsible.init(this.Collapsible, options);
  }

  render() {
    const { day } = this.props;

    return (
      <>
        <div className="col s12">
          <h5>
            <i
              className="iconify"
              data-icon="bx:bxs-bible"
              data-inline="false"
            ></i>{" "}
            SCRIPTURE READINGS (KJV)
          </h5>

          <ul
            className="collapsible"
            ref={Collapsible => {
              this.Collapsible = Collapsible;
            }}
          >
            {day.readings
              ? day.readings.map(reading => (
                  <li key={reading.display}>
                    <div className="collapsible-header">
                      <h5>{reading.display}</h5>
                    </div>
                    <div className="collapsible-body">
                      {reading.passage.map(verse => (
                        <p style={{ margin: "0" }} key={verse.content}>
                          <span
                            className="blue-text text-lighten-2"
                            key={verse.verse}
                          >
                            {verse.verse}{" "}
                          </span>
                          {verse.content}
                        </p>
                      ))}
                    </div>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </>
    );
  }
}

export default Readings;
