import React, { Component } from "react";

class FeastDayCard extends Component {
  render() {
    const { jurisdiction, ocaSaints, rocInfo } = this.props;

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

          {(jurisdiction === "oca" && !ocaSaints.length) ||
          (jurisdiction === "rocor" && !rocInfo.saints.length) ? (
            <>
              <div className="progress cyan lighten-2">
                <div className="indeterminate cyan darken-2"></div>
              </div>
            </>
          ) : null}

          <div className="row">
            <div className="col s12">
              <ul>
                {jurisdiction === "oca" && ocaSaints
                  ? ocaSaints.map((saint, i) => (
                      <a
                        key={i}
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

                {jurisdiction === "rocor" && rocInfo.feastDay
                  ? rocInfo.feastDay.map((feast, i) => <h6 key={i}>{feast}</h6>)
                  : null}

                {jurisdiction === "rocor" && rocInfo.saints
                  ? rocInfo.saints.map((saint) => (
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
