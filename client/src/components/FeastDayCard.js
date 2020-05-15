import React, { Component } from "react";

class FeastDayCard extends Component {
  render() {
    const { jurisdiction, ocaSaints, rocSaintLives } = this.props;

    return (
      <div className="col s12 m6">
        <div className="card-panel cyan lighten-4">
          <h5>
            <i
              className="iconify"
              data-icon="emojione-monotone:candle"
              data-inline="false"
            ></i>{" "}
            SAINTS AND FEASTS
          </h5>
          <div className="row">
            <div className="col s12">
              <ul>
                {jurisdiction === "oca" && ocaSaints
                  ? ocaSaints.map((saint) => (
                      <a
                        key={saint.title}
                        href={saint.link}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <h6>{saint.title}</h6>

                        {saint.image ? (
                          <img
                            className="mb-1"
                            src={saint.image}
                            alt="Saint pic"
                          />
                        ) : (
                          <div className="mb-2"></div>
                        )}
                      </a>
                    ))
                  : null}

                {jurisdiction === "rocor" && rocSaintLives
                  ? rocSaintLives.map((saint) => (
                      <a
                        key={saint.title}
                        href={saint.link}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <h6>{saint.title}</h6>

                        {saint.image ? (
                          <img
                            className="mb-1"
                            src={saint.image}
                            alt="Saint pic"
                            width="125px"
                          />
                        ) : (
                          <div className="mb-2"></div>
                        )}
                      </a>
                    ))
                  : null}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeastDayCard;
