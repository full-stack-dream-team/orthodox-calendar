import React, { Component } from "react";
import M from "materialize-css";

class Readings extends Component {
  collapsibleInitialized = false;

  componentDidUpdate() {
    if (
      !this.carouselInitialized &&
      this.Collapsible &&
      this.Collapsible.innerHTML
    ) {
      const options = {
        noWrap: true,
        fullWidth: true,
      };
      M.Collapsible.init(this.Collapsible, options);

      this.collapsibleInitialized = true;
    }
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
            ref={(Collapsible) => {
              this.Collapsible = Collapsible;
            }}
          >
            {day.readings
              ? day.readings.map((reading, i) => (
                  <li key={i} className={i === 0 ? " active" : ""}>
                    <div className="collapsible-header hoverable">
                      <h5 className="center-align">
                        {i + 1}.{" "}
                        <i
                          className="iconify"
                          data-icon="bx:bxs-bible"
                          data-inline="false"
                        ></i>{" "}
                        {reading.display}
                      </h5>
                    </div>
                    <div className="collapsible-body">
                      {reading.passage.map((verse, i) => (
                        <p style={{ margin: "0" }} key={i}>
                          <span className="blue-text text-lighten-2">
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
