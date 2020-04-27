import React, { Component } from "react";

class FeastDayCard extends Component {
  render() {
    const { day } = this.props;

    return (
      <div className="col s12 m6">
        <div className="card-panel">
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
              {day.feasts ? (
                <p>
                  <strong>FEASTS</strong>
                </p>
              ) : (
                ""
              )}
              <ul>
                {day.feasts
                  ? day.feasts.map(feast => <li key={feast}>{feast}</li>)
                  : null}
              </ul>

              {day.saints ? (
                <p>
                  <strong>SAINTS</strong>
                </p>
              ) : (
                ""
              )}
              <ul>
                {day.saints
                  ? day.saints.map(saint => <li key={saint}>{saint}</li>)
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
