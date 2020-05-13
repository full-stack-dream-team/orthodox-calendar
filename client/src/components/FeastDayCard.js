import React, { Component } from "react";

class FeastDayCard extends Component {
  // componentDidMount() {
  //   if (!window.getRussianInfo && this.props.getRussianInfo) {
  //     window.getRussianInfo = this.props.getRussianInfo;
  //   }
  // }

  // removeHTMLFromRussianInfo = () => {
  //   let { russianInfo } = { ...this.props };
  //
  //   if (!russianInfo.trim()) return "";
  //
  //   let removeFromString = "";
  //
  //   for (let i = 0; i < russianInfo.length; i++) {
  //     removeFromString += russianInfo[i];
  //     if (russianInfo.slice(i + 1, i + 7) === "<body>") {
  //       removeFromString += russianInfo.slice(i + 1, i + 7);
  //
  //       i = russianInfo.length;
  //     }
  //   }
  //   russianInfo = russianInfo.replace(removeFromString, "");
  //
  //   removeFromString = "";
  //
  //   for (let i = russianInfo.length - 1; i > -1; i--) {
  //     removeFromString += russianInfo[i];
  //     if (russianInfo.slice(i - 7, i) === "</body>") {
  //       removeFromString += russianInfo
  //         .slice(i - 7, i)
  //         .split("")
  //         .reverse()
  //         .join("");
  //
  //       i = -1;
  //     }
  //   }
  //   russianInfo = russianInfo.replace(
  //     removeFromString.split("").reverse().join(""),
  //     ""
  //   );
  //
  //   return russianInfo || "";
  // };

  render() {
    const {
      jurisdiction,
      // russianInfo,
      ocaSaintLives,
      rocSaints,
    } = this.props;

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
                {jurisdiction === "oca" && ocaSaintLives
                  ? ocaSaintLives.map((saint) => (
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
              </ul>
            </div>
          </div>
          {jurisdiction === "rocor" && rocSaints ? (
            <div className="row">
              <div className="col s12">{rocSaints.saintList}</div>
            </div>
          ) : (
            "TEST"
          )}
        </div>
      </div>
    );
  }
}

export default FeastDayCard;
