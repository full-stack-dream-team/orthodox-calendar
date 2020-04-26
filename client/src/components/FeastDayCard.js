import React, { Component } from "react";

class FeastDayCard extends Component {
  render() {
    const { day } = this.props;

    return (
      <div className="col s12">
        <div className="card-panel">
          <h5>
            <i
              className="iconify"
              data-icon="maki:monument-11"
              data-inline="false"
            ></i>{" "}
            Commemorations
          </h5>
          <div className="row">
            <div className="col s12 m6">
              <ul>
                {day.feasts
                  ? day.feasts.map(feast => <li key={feast}>{feast}</li>)
                  : null}
              </ul>
            </div>
            <div className="col s12 m6">
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
