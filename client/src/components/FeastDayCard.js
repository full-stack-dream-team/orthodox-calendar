import React, { Component } from "react";
import logo from "../images/logo192.png";

class FeastDayCard extends Component {
  render() {
    const { jurisdiction, ocaSaints, rocInfo } = this.props;

    return (
      <div className="col s12">
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
          {jurisdiction === "oca" && ocaSaints
            ? ocaSaints.map((saint, i) => (
                <div key={i} className="col s12 m4">
                  <div className="card small hoverable">
                    <a
                      title={saint.title.length > 60 ? saint.title : ""}
                      href={saint.link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {saint.image ? (
                        <div className="card-content waves-effect waves-block waves-light center-align">
                          <img src={saint.image} alt={saint.title} />
                          <h6>{saint.title}</h6>
                        </div>
                      ) : (
                        <div className="card-content waves-effect waves-block waves-light center-align">
                          <img src={logo} alt={saint.title} width="175" />
                          <h6>{saint.title}</h6>
                        </div>
                      )}
                    </a>
                  </div>
                </div>
              ))
            : null}

          {jurisdiction === "rocor" && rocInfo.feastDay
            ? rocInfo.feastDay.map((feast, i) => (
                <div key={i} className="col s12">
                  <h6>Feast: {feast}</h6>
                </div>
              ))
            : null}

          {jurisdiction === "rocor" && rocInfo.saints
            ? rocInfo.saints.map((saint, i) => (
                <div key={i} className="col s12 m4">
                  <div className="card small hoverable">
                    <a
                      title={saint.title.length > 60 ? saint.title : ""}
                      key={saint.title}
                      href={saint.link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {saint.image ? (
                        <div className="card-content waves-effect waves-block waves-light center-align">
                          <img
                            className="mb-1"
                            src={saint.image}
                            alt={saint.title}
                            width="125px"
                          />
                          <h6>
                            {saint.title.length > 60
                              ? saint.title.slice(0, 60) + "..."
                              : saint.title}
                          </h6>
                        </div>
                      ) : (
                        <div className="card-content waves-effect waves-block waves-light center-align">
                          <img src={logo} alt={saint.title} width="175" />
                          <h6>{saint.title}</h6>
                        </div>
                      )}
                    </a>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    );
  }
}

export default FeastDayCard;
