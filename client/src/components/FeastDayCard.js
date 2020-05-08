import React, { Component } from "react";

class FeastDayCard extends Component {
  componentDidMount() {
    if (!window.getRussianInfo && this.props.getRussianInfo) {
      window.getRussianInfo = this.props.getRussianInfo;
    }
  }

  removeHTMLFromRussianInfo = () => {
    let { russianInfo } = { ...this.props };

    if (!russianInfo.trim()) return "";

    let removeFromString = "";

    for (let i = 0; i < russianInfo.length; i++) {
      removeFromString += russianInfo[i];
      if (russianInfo.slice(i + 1, i + 7) === "<body>") {
        removeFromString += russianInfo.slice(i + 1, i + 7);

        i = russianInfo.length;
      }
    }
    russianInfo = russianInfo.replace(removeFromString, "");

    removeFromString = "";

    for (let i = russianInfo.length - 1; i > -1; i--) {
      removeFromString += russianInfo[i];
      if (russianInfo.slice(i - 7, i) === "</body>") {
        removeFromString += russianInfo
          .slice(i - 7, i)
          .split("")
          .reverse()
          .join("");

        i = -1;
      }
    }
    russianInfo = russianInfo.replace(
      removeFromString.split("").reverse().join(""),
      ""
    );

    return russianInfo || "";
  };

  render() {
    const { day, jurisdiction, russianInfo } = this.props;

    // const russianInfo = this.removeHTMLFromRussianInfo();

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
              <>
                <ul>
                  {jurisdiction === "oca" && day.feasts
                    ? day.feasts.map((feast) => <li key={feast}>{feast}</li>)
                    : null}
                </ul>

                <div style={{ marginLeft: "1.4rem" }}>
                  <ul>
                    {jurisdiction === "oca" && day.saints
                      ? day.saints.map((saint) => (
                          <li style={{ listStyleType: "disc" }} key={saint}>
                            {saint}
                          </li>
                        ))
                      : null}
                  </ul>
                </div>
              </>
            </div>
          </div>
          {jurisdiction === "rocor" && (
            <div className="row">
              <div
                className="col s12"
                dangerouslySetInnerHTML={{
                  __html: this.props.russianSaintLives,
                }}
              ></div>
            </div>
          )}
          <div dangerouslySetInnerHTML={{ __html: russianInfo }}></div>
        </div>
      </div>
    );
  }
}

export default FeastDayCard;
